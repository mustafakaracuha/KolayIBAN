import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

// Components
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import IbanList from "./components/IbanList";
import AddIbanModal from "./components/AddIbanModal";
import ConfirmModal from "./components/ConfirmModal";
import FloatingAddButton from "./components/FloatingAddButton";
import ScrollToTop from "./components/ScrollToTop";

// Utils
import {
  validateIBAN,
  formatIBAN,
  turkishBanks,
} from "./utils/ibanUtils";
import { loadIbans, saveIbans } from "./utils/storageUtils";

function App() {
  const [ibans, setIbans] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIban, setEditingIban] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [showQR, setShowQR] = useState(null);
  const [hiddenIbans, setHiddenIbans] = useState(new Set());
  const [encryptionKey, setEncryptionKey] = useState("");
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: null,
    type: "danger",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    iban: "",
    bankName: "",
    description: "",
    tags: "",
  });

  useEffect(() => {
    const savedIbans = loadIbans(encryptionKey);
    setIbans(savedIbans);


    // Loading'i 1 saniye göster
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [encryptionKey]);



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.iban.trim()) {
      toast.error("İsim ve IBAN alanları zorunludur!");
      return;
    }

    if (!validateIBAN(formData.iban)) {
      toast.error("Geçersiz IBAN formatı!");
      return;
    }

    // Aynı IBAN'ın daha önce eklenip eklenmediğini kontrol et
    const formattedIban = formatIBAN(formData.iban);
    const existingIban = ibans.find(iban => iban.iban === formattedIban);
    
    if (existingIban && (!isEditing || editingIban?.id !== existingIban.id)) {
      toast.error(`Bu IBAN zaten "${existingIban.name}" adıyla kayıtlı! Lütfen farklı bir IBAN ekleyin.`);
      return;
    }

    if (isEditing && editingIban) {
      // Düzenleme modu
      const updatedIban = {
        ...editingIban,
        name: formData.name.trim(),
        iban: formatIBAN(formData.iban),
        bankName: formData.bankName,
        description: formData.description.trim(),
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
        updatedAt: new Date().toISOString(),
      };

      const updatedIbans = ibans.map((iban) =>
        iban.id === editingIban.id ? updatedIban : iban
      );

      if (saveIbans(updatedIbans, encryptionKey)) {
        setIbans(updatedIbans);
        setFormData({
          name: "",
          iban: "",
          bankName: "",
          description: "",
          tags: "",
        });
        setShowForm(false);
        setIsEditing(false);
        setEditingIban(null);
        toast.success("IBAN başarıyla güncellendi!");
      } else {
        toast.error("IBAN güncellenirken hata oluştu!");
      }
    } else {
      // Yeni IBAN ekleme modu
      const newIban = {
        id: Date.now(),
        name: formData.name.trim(),
        iban: formatIBAN(formData.iban),
        bankName: formData.bankName,
        description: formData.description.trim(),
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
        createdAt: new Date().toISOString(),
      };

      const updatedIbans = [newIban,...ibans];
      if (saveIbans(updatedIbans, encryptionKey)) {
        setIbans(updatedIbans);
        setFormData({
          name: "",
          iban: "",
          bankName: "",
          description: "",
          tags: "",
        });
        setShowForm(false);
        toast.success("IBAN başarıyla kaydedildi!");
      } else {
        toast.error("IBAN kaydedilirken hata oluştu!");
      }
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("IBAN kopyalandı!");
  };

  const editIban = (iban) => {
    setEditingIban(iban);
    setIsEditing(true);
    setFormData({
      name: iban.name,
      iban: iban.iban,
      bankName: iban.bankName || "",
      description: iban.description || "",
      tags: iban.tags.join(", "),
    });
    setShowForm(true);
  };

  const toggleIbanVisibility = (ibanId) => {
    setHiddenIbans((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(ibanId)) {
        newSet.delete(ibanId);
      } else {
        newSet.add(ibanId);
      }
      return newSet;
    });
  };

  const deleteIban = (id) => {
    const ibanToDelete = ibans.find((iban) => iban.id === id);
    setConfirmModal({
      isOpen: true,
      title: "IBAN Sil",
      message: `"${ibanToDelete?.name}" IBAN'ını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.`,
      confirmText: "Sil",
      cancelText: "İptal",
      type: "danger",
      showPinInput: false,
      pinValue: "",
      onConfirm: () => {
        const updatedIbans = ibans.filter((iban) => iban.id !== id);
        if (saveIbans(updatedIbans, encryptionKey)) {
          setIbans(updatedIbans);
          toast.success("IBAN silindi!");
        } else {
          toast.error("IBAN silinirken hata oluştu!");
        }
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
      },
      onCancel: () => setConfirmModal((prev) => ({ ...prev, isOpen: false })),
    });
  };

  const filteredIbans = ibans.filter((iban) => {
    const matchesSearch =
      iban.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      iban.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      iban.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesBank = !selectedBank || iban.bankName === selectedBank;
    return matchesSearch && matchesBank;
  });

 
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex flex-col">
      <Toaster position="top-center" />

      <Header onAboutClick={() => setShowAbout(true)} />

      <div className="w-full px-4 sm:px-5 md:max-w-3xl md:mx-auto py-3 sm:py-6 overflow-y-auto flex-1 bg-transparent">
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBank={selectedBank}
          setSelectedBank={setSelectedBank}
          onAddIban={() => setShowForm(true)}
          turkishBanks={turkishBanks}
        />

        <IbanList
          ibans={ibans}
          filteredIbans={filteredIbans}
          showQR={showQR}
          hiddenIbans={hiddenIbans}
          onCopy={copyToClipboard}
          onToggleQR={setShowQR}
          onDelete={deleteIban}
          onEdit={editIban}
          onToggleVisibility={toggleIbanVisibility}
          isLoading={isLoading}
        />
      </div>

              <AddIbanModal
          showForm={showForm}
          formData={formData}
          setFormData={setFormData}
          onClose={() => {
            setShowForm(false);
            setIsEditing(false);
            setEditingIban(null);
            setFormData({
              name: "",
              iban: "",
              bankName: "",
              description: "",
              tags: "",
            });
          }}
          onSubmit={handleSubmit}
          turkishBanks={turkishBanks}
          isEditing={isEditing}
          editingIban={editingIban}
        />

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        message={confirmModal.message}
        confirmText={confirmModal.confirmText}
        cancelText={confirmModal.cancelText}
        type={confirmModal.type}
        showPinInput={confirmModal.showPinInput}
        pinValue={confirmModal.pinValue}
        onPinChange={(value) =>
          setConfirmModal((prev) => ({ ...prev, pinValue: value }))
        }
        onConfirm={confirmModal.onConfirm}
        onCancel={confirmModal.onCancel}
      />
      
      <ScrollToTop />
      <FloatingAddButton onClick={() => setShowForm(true)} />
    </div>
  );
}

export default App;
