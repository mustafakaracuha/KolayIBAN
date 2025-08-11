import { X, User, CreditCard, Building, FileText, Tags } from 'lucide-react'

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 md:p-4 z-50">
      <div className="card-modern w-full p-3 sm:p-4 md:p-6 max-w-lg sm:max-w-md md:max-w-2xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto mobile-modal">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-xl">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {isEditing ? 'IBAN Düzenle' : 'Yeni IBAN Ekle'}
            </h2>
              <p className="text-gray-600 text-sm">Güvenli şekilde IBAN bilgilerinizi kaydedin</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-4 md:space-y-5">
          {/* İsim ve IBAN Satırı */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                İsim *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="input-modern w-full py-3"
                placeholder="Kişi veya kurum adı"
                required
              />
            
            
          </div>
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
                  setFormData({...formData, iban: value})
                }}
                className="input-modern w-full font-mono py-3"
                placeholder="TR00 0000 0000 0000 0000 0000 00"
                required
              />
            </div>
          {/* Banka Seçimi */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-purple-600" />
              Banka Adı
            </label>
            <select
              value={formData.bankName}
              onChange={(e) => setFormData({...formData, bankName: e.target.value})}
              className="input-modern w-full py-3"
            >
              <option value="">Banka seçin</option>
              {turkishBanks.map(bank => (
                <option key={bank} value={bank}>{bank}</option>
              ))}
            </select>
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
              className="input-modern w-full py-3"
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
              className="input-modern w-full py-3"
              placeholder="Kira, Borç, Aile (virgülle ayırın)"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-2">
              Etiketler IBAN'larınızı kategorilere ayırmanıza yardımcı olur
            </p>
          </div>
          
          {/* Butonlar */}
          <div className="flex gap-3 md:gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 md:px-6 py-3 border-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 touch-friendly"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 btn-modern px-4 md:px-6 py-3 touch-friendly"
            >
              {isEditing ? 'Güncelle' : 'Kaydet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddIbanModal
