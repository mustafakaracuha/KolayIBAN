import { X, AlertTriangle, Trash2, Lock, Key } from 'lucide-react'

function ConfirmModal({ 
  isOpen, 
  title, 
  message, 
  confirmText = "Sil", 
  cancelText = "İptal",
  onConfirm, 
  onCancel,
  type = "danger", // danger, warning, info, pin
  pinValue = "",
  onPinChange = null,
  showPinInput = false
}) {
  if (!isOpen) return null

  const getIconAndColors = () => {
    // Türüne göre icon ve renkleri dönüyoruz
    switch (type) {
      case 'danger':
        return {
          icon: <Trash2 className="w-6 h-6 text-white" />,
          bgColor: 'bg-gradient-dark',
          buttonColor: 'bg-red-500 hover:bg-red-600'
        }
      case 'warning':
        return {
          icon: <AlertTriangle className="w-6 h-6 text-white" />,
          bgColor: 'bg-gradient-warning',
          buttonColor: 'bg-orange-500 hover:bg-orange-600'
        }
      case 'pin':
        return {
          icon: <Lock className="w-6 h-6 text-white" />,
          bgColor: 'bg-gradient-primary',
          buttonColor: 'bg-indigo-600 hover:bg-indigo-700'
        }
      default:
        return {
          icon: <AlertTriangle className="w-6 h-6 text-white" />,
          bgColor: 'bg-gradient-primary',
          buttonColor: 'bg-blue-500 hover:bg-blue-600'
        }
    }
  }

  const { icon, bgColor, buttonColor } = getIconAndColors()

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="card-modern w-full p-6 max-w-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 ${bgColor} rounded-xl`}>
              {icon}
            </div>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          </div>
          <button
            onClick={onCancel}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed">{message}</p>
          
          {showPinInput && (
            <div className="mt-4">
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={pinValue}
                  onChange={(e) => {
                    console.log('PIN input değişti:', e.target.value)
                    onPinChange && onPinChange(e.target.value)
                  }}
                  placeholder="PIN kodunuzu girin"
                  className="input-modern w-full pl-10 pr-4 py-3 text-center font-mono tracking-widest"
                  maxLength={6}
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="flex gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 px-6 py-3 text-white rounded-xl font-semibold transition-all duration-300 ${buttonColor}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
