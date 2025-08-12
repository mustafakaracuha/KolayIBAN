import { Plus} from 'lucide-react'

function SearchAndFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedBank, 
  setSelectedBank, 
  onAddIban,
  turkishBanks 
}) {
  return (
    <div className="bg-white/80 shadow-lg dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/50 p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 mobile-search-filter overflow-hidden w-full mt-6 md:mt-14">
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:flex-row">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="İsim, açıklama veya etiket ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-modern dark:bg-slate-700/50 w-full pl-14 md:pl-14 pr-4 py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-xl relative"
          />
        </div>
            <div className="relative flex-1">
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="input-modern pl-12 md:pl-14 pr-4 py-3 md:py-4 text-sm sm:text-base md:text-lg appearance-none cursor-pointer rounded-xl w-full"
          >
            <option value="">Tüm Bankalar</option>
            {turkishBanks.map(bank => (
              <option key={bank} value={bank}>{bank}</option>
            ))}
          </select>
        </div>
        
        {/* Masaüstü IBAN Ekle Butonu - Sadece md ve üstünde görünür */}
        <button
          onClick={onAddIban}
          className="hidden md:flex btn-modern cursor-pointer items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-4 md:py-5 text-base md:text-lg whitespace-nowrap touch-friendly rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Plus className="w-5 h-5 md:w-6 md:h-6" />
          <span>IBAN Ekle</span>
        </button>
      </div>
    </div>
  )
}

export default SearchAndFilter
