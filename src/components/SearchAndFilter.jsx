import { Plus, Search, Building2, ChevronDown, ChevronUp, Filter } from 'lucide-react'
import { useState } from 'react'

function SearchAndFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedBank, 
  setSelectedBank, 
  onAddIban,
  turkishBanks 
}) {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  return (
    <div className="bg-white/90 shadow-xl dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-white/30 dark:border-slate-600/50 p-4 sm:p-6 mb-5 sm:mb-6 mobile-search-filter overflow-hidden w-full mt-6 md:mt-12 mx-0 sm:mx-auto">
      
      {/* Filter Toggle Button */}
      <div className="lg:mb-4">
        <button
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          className="flex items-center justify-center gap-2 cursor-pointer !px-1 !pb-3 !outline-none !border-none text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 w-full"
        >
          <Filter className="w-4 h-4" />
          <span>Arama ve Filtre</span>
          <div className="ml-auto">
            {isFilterExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </button>
      </div>

      {/* Filter Section - Gizlenebilir */}
      {isFilterExpanded && (
        <div className="mb-6 animate-in slide-in-from-top-2 duration-300 space-y-4">
          {/* Search Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              IBAN Ara
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="İsim, açıklama veya etiket ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-modern dark:bg-slate-700/60 w-full !pl-11 pr-4 py-3 text-base rounded-2xl border-2 border-gray-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>

          {/* Bank Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Banka Seçimi
            </label>
            <div className="relative">
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="input-modern dark:bg-slate-700/60 w-full !pl-11 pr-4 py-3 text-base appearance-none cursor-pointer rounded-2xl border-2 border-gray-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all duration-300"
              >
                <option value="">Tüm Bankalar</option>
                {turkishBanks.map(bank => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
              <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )}
      
      {/* Add IBAN Button - Sadece masaüstünde görünür */}
      <div className="text-center hidden md:block">
        <button
          onClick={onAddIban}
          className="!cursor-pointer flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold whitespace-nowrap touch-friendly rounded-xl shadow-2xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-slate-700 dark:to-slate-800 dark:hover:from-slate-800 dark:hover:to-slate-900 text-white border-2 border-blue-500 hover:border-blue-400 dark:border-slate-600 dark:hover:border-slate-500 w-full transform "
        >
          <Plus className="w-6 h-6" />
          <span>Yeni IBAN Ekle</span>
        </button>
      </div>
    </div>
  )
}

export default SearchAndFilter
