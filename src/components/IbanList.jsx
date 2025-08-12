import { Search, Plus, FolderOpen, CreditCard } from "lucide-react";
import IbanCard from "./IbanCard";
import LoadingSpinner from "./LoadingSpinner";

function IbanList({
  ibans,
  filteredIbans,
  showQR,
  hiddenIbans,
  onCopy,
  onToggleQR,
  onDelete,
  onEdit,
  onToggleVisibility,
  isLoading = false
}) {
  // Loading durumu
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (filteredIbans.length === 0) {
    return (
      <div className="space-y-8 md:space-y-8 iban-list-container">
        {/* IBAN'larım Başlığı */}
        <div className="flex items-center gap-3 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              IBAN'larım
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
              {ibans.length === 0 ? "" : "Arama sonucu bulunamadı"}
            </p>
          </div>
        </div>
        
        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-2xl p-8 md:p-16 text-center">
          <div className="text-gray-400 mb-6">
            {ibans.length === 0 ? (
              <div>
                <CreditCard className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              </div>
            ) : (
              <Search className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
            )}
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2 md:mb-4">
            {ibans.length === 0
              ? "Henüz IBAN kaydedilmedi"
              : "Arama sonucu bulunamadı"}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed">
            {ibans.length === 0 ? (
              <span>
                <span className="md:hidden">İlk IBAN'ınızı eklemek için alttaki <span className="font-semibold">+</span> butonuna tıklayınız.</span>
                <span className="hidden md:inline">İlk IBAN'ınızı eklemek için yukarıdaki "IBAN Ekle" butonuna tıklayın.</span>
              </span>
            ) : (
              "Farklı arama terimleri deneyin veya filtreleri temizleyin."
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 md:space-y-8 iban-list-container">
      {/* IBAN'larım Başlığı */}
      <div className="flex items-center gap-3 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            IBAN'larım
          </h2>
          <p className="text-sm sm:text-base text-gray-500/70 dark:text-gray-400/70 mt-1">
            {filteredIbans.length} IBAN kaydedildi
          </p>
        </div>
      </div>
      
      {filteredIbans.map((iban) => (
        <IbanCard
          key={iban.id}
          iban={iban}
          showQR={showQR}
          isHidden={hiddenIbans.has(iban.id)}
          onCopy={onCopy}
          onToggleQR={onToggleQR}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleVisibility={onToggleVisibility}
        />
      ))}
    </div>
  );
}

export default IbanList;
