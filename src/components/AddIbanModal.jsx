import { X, User, CreditCard, Building, FileText, Tags } from 'lucide-react'
import { getBankFromIBAN } from '../utils/ibanUtils';

function AddIbanModal({ 
  showForm, 
  formData, 
  setFormData, 
  onClose, 
  onSubmit, 
  turkishBanks,
  isEditing = false,
  editingIban = null
}) {
  if (!showForm) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-0 md:p-4 z-[1000]">
      <div className="bg-white dark:bg-slate-800 w-full h-full md:h-auto md:max-w-lg md:max-h-[85vh] md:rounded-2xl md:shadow-xl overflow-y-auto">
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-slate-800 -mx-4 -mt-4 md:mx-0 md:mt-0 px-4 pt-4 pb-4 md:px-0 md:pt-0 md:pb-0 border-b border-gray-200 dark:border-gray-700 md:border-none mb-4 sm:mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-xl">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {isEditing ? 'IBAN Düzenle' : 'Yeni IBAN Ekle'}
                </h2>
                  <p className="text-gray-600 text-sm hidden md:block">Güvenli şekilde IBAN bilgilerinizi kaydedin</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-5 md:space-y-6 pb-24 md:pb-0">
            {/* İsim */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                İsim *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Kişi veya kurum adı"
                required
              />
            </div>

            {/* IBAN */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-green-600" />
                IBAN *
              </label>
              <input
                type="text"
                value={formData.iban}
                onChange={(e) => {
                  const value = e.target.value.toUpperCase()
                  
                  // IBAN'dan banka adını otomatik çıkar
                  const detectedBank = getBankFromIBAN(value)
                  
                  setFormData({
                    ...formData, 
                    iban: value,
                    bankName: detectedBank || ""
                  })
                }}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-slate-700 text-gray-900 dark:text-white font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="TR00 0000 0000 0000 0000 0000 00"
                required
              />
            </div>

            {/* Banka Adı (Otomatik Tespit) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <Building className="w-4 h-4 text-purple-600" />
                Banka Adı
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white">
                {formData.bankName ? (
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="font-medium">{formData.bankName}</span>
                    <span className="text-xs text-gray-500">(Otomatik tespit edildi)</span>
                  </div>
                ) : (
                  <span className="text-gray-500">IBAN girin, banka otomatik tespit edilecek</span>
                )}
              </div>
            </div>
            
            {/* Açıklama */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-600" />
                Açıklama
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Örn: Kira ödemesi, Arkadaş borcu"
              />
            </div>
            
            {/* Etiketler */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <Tags className="w-4 h-4 text-pink-600" />
                Etiketler
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Kira, Borç, Aile (virgülle ayırın)"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-2">
                Etiketler IBAN'larınızı kategorilere ayırmanıza yardımcı olur
              </p>
            </div>
            
            {/* Butonlar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 md:relative md:border-none md:bg-transparent">
              <div className="p-4 md:p-0">
                <div className="flex gap-3 md:gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 md:px-6 py-4 md:py-3 border-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 md:px-6 py-4 md:py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2]  text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    {isEditing ? 'Güncelle' : 'Kaydet'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddIbanModal
