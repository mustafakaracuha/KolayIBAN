import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Header from "../components/Header";
import SearchAndFilter from "../components/SearchAndFilter";
import IbanList from "../components/IbanList";
import AddIbanModal from "../components/AddIbanModal";
import ConfirmModal from "../components/ConfirmModal";
import FloatingAddButton from "../components/FloatingAddButton";
import ScrollToTop from "../components/ScrollToTop";
import {
  loadIbans,
  saveIbans,
  turkishBanks,
  validateIBAN,
  formatIBAN,
} from "../utils";

function HomePage() {
  const [ibans, setIbans] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showQR, setShowQR] = useState(null);
  const [hiddenIbans, setHiddenIbans] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIban, setEditingIban] = useState(null);
  const [encryptionKey, setEncryptionKey] = useState(null);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    confirmText: "Onayla",
    cancelText: "İptal",
    type: "danger",
    showPinInput: false,
    pinValue: "",
    onConfirm: () => {},
    onCancel: () => {},
  });

  const [formData, setFormData] = useState({
    name: "",
    iban: "",
    bankName: "",
    description: "",
    tags: "",
  });

  // İlk yükleme
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Şifreleme anahtarını oluştur veya yükle
        let key = localStorage.getItem("encryptionKey");
        if (!key) {
          const { generateEncryptionKey } = await import("../utils");
          key = generateEncryptionKey();
          localStorage.setItem("encryptionKey", key);
        }
        setEncryptionKey(key);

        // IBAN'ları yükle
        const loadedIbans = loadIbans(key);
        setIbans(loadedIbans);

        // Gizli IBAN'ları yükle
        const hiddenIds = JSON.parse(localStorage.getItem("hiddenIbans") || "[]");
        setHiddenIbans(new Set(hiddenIds));
      } catch (error) {
        console.error("Uygulama başlatılırken hata:", error);
        toast.error("Uygulama başlatılırken hata oluştu!");
      } finally {
        // Loading'i 1 saniye göster
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    initializeApp();
  }, []);

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
      bankName: iban.bankName,
      description: iban.description,
      tags: iban.tags.join(", "),
    });
    setShowForm(true);
  };

  const deleteIban = (ibanId) => {
    const ibanToDelete = ibans.find(iban => iban.id === ibanId);
    if (!ibanToDelete) {
      toast.error("IBAN bulunamadı!");
      return;
    }

    setConfirmModal({
      isOpen: true,
      title: "IBAN Sil",
      message: `"${ibanToDelete.name}" adlı IBAN'ı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.`,
      confirmText: "Sil",
      cancelText: "İptal",
      type: "danger",
      showPinInput: false,
      pinValue: "",
      onConfirm: () => {
        const updatedIbans = ibans.filter((i) => i.id !== ibanId);
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

  const toggleIbanVisibility = (ibanId) => {
    const newHiddenIbans = new Set(hiddenIbans);
    if (newHiddenIbans.has(ibanId)) {
      newHiddenIbans.delete(ibanId);
    } else {
      newHiddenIbans.add(ibanId);
    }
    setHiddenIbans(newHiddenIbans);
    localStorage.setItem("hiddenIbans", JSON.stringify([...newHiddenIbans]));
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex flex-col">
      <Header />

      {/* Header sabit olduğu için üstten boşluk bırak */}
      <div className="w-full px-4 sm:px-5 md:max-w-3xl md:mx-auto pt-24 sm:pt-20 pb-3 sm:pb-6 flex-1 bg-transparent">
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

export default HomePage;
