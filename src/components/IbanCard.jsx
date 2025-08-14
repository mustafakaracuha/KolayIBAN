import {
  Copy,
  QrCode,
  Trash2,
  Edit,
  User,
  Building,
  Tag,
  Eye,
  EyeOff,
  MoreVertical,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";
import { getBankLogo, isBank, getBankColor } from "../utils/bankLogos";

function IbanCard({
  iban,
  showQR,
  isHidden,
  onCopy,
  onToggleQR,
  onDelete,
  onEdit,
  onToggleVisibility,
}) {
  const [showMenu, setShowMenu] = useState(false);

    // Menü dışına tıklandığında kapatıyoruz
    useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest('.menu-container')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);


  // IBAN kartını oluşturuyoruz
  return (
    <div className="card-modern p-3 sm:p-4 md:p-8 transition-all duration-300 mobile-iban-card w-full shadow-modern">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            {/* Banka logosunu gösteriyoruz */}
            {iban.bankName && isBank(iban.bankName) ? (
              getBankLogo(iban.bankName) ? (
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden bg-white border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                                     <img 
                     src={getBankLogo(iban.bankName)} 
                     alt={iban.bankName}
                     className="w-10 h-10 md:w-12 md:h-12 p-1 object-contain"
                     onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'flex';
                     }}
                   />
                  <div className="hidden p-1.5 md:p-3 bg-gradient-primary rounded-xl md:rounded-2xl">
                    <Building className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              ) : (
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center ${getBankColor(iban.bankName)}`}> 
                  <Building className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              )
            ) : (
              <div className="p-1.5 md:p-3 bg-gradient-primary rounded-xl md:rounded-2xl">
                <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 md:mb-2 leading-tight">
                  {iban.name}
                </h3>
                {/* Mobil üç nokta menüsü */}
                <div className="md:hidden relative menu-container">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-2 flex items-center justify-center bg-gray-100 dark:bg-slate-700 border-none !outline-none rounded-xl transition-all duration-300 touch-friendly"
                    title="Menü"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </button>

                  {/* Mobil menü dropdown */}
                  {showMenu && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 z-[9999]">
                      <div className="py-2">
                        <button
                          onClick={() => {
                            onEdit(iban);
                            setShowMenu(false);
                          }}
                          className="w-full cursor-pointer px-4 py-3 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Düzenle</span>
                        </button>
                        <button
                          onClick={() => {
                            onCopy(iban.iban);
                            setShowMenu(false);
                          }}
                          className="w-full cursor-pointer px-4 py-3 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                          <span>Kopyala</span>
                        </button>
                        <button
                          onClick={() => {
                            onToggleQR(showQR === iban.id ? null : iban.id);
                            setShowMenu(false);
                          }}
                          className="w-full cursor-pointer px-4 py-3 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors"
                        >
                          <QrCode className="w-4 h-4" />
                          <span>{showQR === iban.id ? "QR Kodu kapat" : "QR Kodu göster"}</span>
                        </button>
                        <button
                          onClick={() => {
                            onDelete(iban.id);
                            setShowMenu(false);
                          }}
                          className="w-full cursor-pointer px-4 py-3 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-3 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Sil</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {iban.bankName && (
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Building className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                  <span className="px-2 md:px-3 py-0.5 tag-bank text-[11px] md:text-sm rounded-full font-medium">
                    {iban.bankName}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-100/80 dark:bg-slate-700/50 outline-none rounded-lg md:rounded-xl p-3 md:p-4 mb-3 md:mb-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-gray-700 dark:text-gray-200 font-mono text-[13px] sm:text-sm md:text-lg font-semibold iban-number">
                {!isHidden ? "•••• •••• •••• •••• •••• •••• •••" : iban.iban}
              </p>
              <button
                onClick={() => onToggleVisibility(iban.id)}
                className="ml-2 p-2 !outline-none cursor-pointer text-gray-500 hover:text-gray-700 transition-colors touch-friendly"
                title={!isHidden ? "IBAN'ı göster" : "IBAN'ı gizle"}
              >
                {!isHidden ? (
                  <Eye className="w-5 h-5 outline-none md:w-5 md:h-5" />
                ) : (
                  <EyeOff className="w-5 h-5 outline-none md:w-5 md:h-5" />
                )}
              </button>
            </div>
          </div>

          {iban.description && (
            <p className="text-gray-600 dark:text-gray-300 text-[13px] sm:text-sm md:text-sm mb-3 md:mb-4 leading-relaxed">
              {iban.description}
            </p>
          )}

          {iban.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-0 md:mb-4">
              <Tag className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
              {iban.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-0.5 tag-custom text-[11px] md:text-sm rounded-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-row md:flex-col items-start justify-start md:justify-start gap-2 md:gap-3 md:ml-6 mobile-action-buttons">
          {/* Desktop butonları */}
          <div className="hidden md:flex md:flex-col gap-3">
            <button
              onClick={() => onEdit(iban)}
              className="p-3 cursor-pointer bg-gradient-primary hover:bg-gradient-secondary rounded-2xl transition-all duration-300 hover:scale-110 shadow-soft touch-friendly"
              title="Düzenle"
            >
              <Edit className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => onCopy(iban.iban)}
              className="p-3 cursor-pointer bg-gradient-success hover:bg-gradient-warning rounded-2xl transition-all duration-300 hover:scale-110 shadow-soft touch-friendly"
              title="Kopyala"
            >
              <Copy className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => onToggleQR(showQR === iban.id ? null : iban.id)}
              className={`p-3 cursor-pointer rounded-2xl transition-all duration-300 hover:scale-110 shadow-soft touch-friendly ${
                showQR === iban.id
                  ? "bg-gradient-secondary"
                  : "bg-gradient-primary hover:bg-gradient-secondary"
              }`}
              title={showQR === iban.id ? "QR Kodu kapat" : "QR Kodu göster"}
            >
              <QrCode className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => onDelete(iban.id)}
              className="p-3 cursor-pointer bg-gradient-dark hover:bg-red-500 rounded-2xl transition-all duration-300 hover:scale-110 shadow-soft touch-friendly"
              title="Sil"
            >
              <Trash2 className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showQR === iban.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
          <div className="flex justify-center">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-soft">
              <QRCodeSVG value={iban.iban} size={160} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IbanCard;
