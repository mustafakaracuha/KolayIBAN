import { X, Shield, Zap, Lock, Smartphone, Github, Twitter, Linkedin, Mail } from 'lucide-react'

function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 md:p-4 z-50">
      <div className="card-modern w-full p-4 md:p-6 max-w-lg sm:max-w-md md:max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                IBAN Kasa
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">v1.0.0</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Uygulama Açıklaması */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              IBAN'larınızı kolayca yönetin
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              IBAN Kasa, IBAN bilgilerinizi güvenli ve kolay bir şekilde saklamanızı, 
              yönetmenizi ve hızlıca erişmenizi sağlayan modern bir web uygulamasıdır.
            </p>
          </div>

          {/* Özellikler */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
              Özellikler
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Güvenli Saklama</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">AES şifreleme ile güvenli</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Hızlı Erişim</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tek tıkla kopyalama</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <Lock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Gizleme</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">IBAN'ları gizle/göster</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                  <Smartphone className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Mobil Uyumlu</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">PWA desteği</p>
                </div>
              </div>
            </div>
          </div>

          {/* Teknolojiler */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-3">
              Teknolojiler
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                Vite
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                PWA
              </span>
            </div>
          </div>

          {/* Geliştirici */}
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Geliştirici
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Mustafa Karaçuha</p>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/mustafakaracuha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/muskaracuha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/mustafakaracuha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:mustafa@example.com"
                  className="p-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-300"
                  title="E-posta"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Kapat Butonu */}
          <div className="flex justify-end pt-3 sm:pt-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-primary hover:bg-gradient-secondary text-white rounded-lg transition-all duration-300"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutModal
