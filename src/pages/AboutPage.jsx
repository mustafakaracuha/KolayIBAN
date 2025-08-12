import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Smartphone, 
  Search, 
  Copy, 
  QrCode, 
  Lock, 
  Globe,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowLeft,
  Star,
  Users,
  Code,
  Heart,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  ChevronRight,
  Target,
  BarChart3,
  Users2,
  Building2
} from 'lucide-react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Hero Section */}
      <div className="pt-8 sm:pt-6 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Content */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl animate-pulse relative">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl animate-ping"></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Yeni Nesil IBAN Yönetimi
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              IBAN Kasa
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
              IBAN'larınızı güvenli ve kullanışlı bir şekilde yönetin. 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Artık IBAN'ları not defterinde aramaya gerek yok!</span>
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 px-4">
              <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 px-4 py-3 rounded-full shadow-lg border border-blue-200 dark:border-blue-800">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-xs sm:text-sm">100% Ücretsiz</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 px-4 py-3 rounded-full shadow-lg border border-green-200 dark:border-green-800">
                <Lock className="w-4 h-4 text-green-500" />
                <span className="font-semibold text-xs sm:text-sm">AES-256 Şifreleme</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 px-4 py-3 rounded-full shadow-lg border border-purple-200 dark:border-purple-800">
                <Globe className="w-4 h-4 text-purple-500" />
                <span className="font-semibold text-xs sm:text-sm">PWA Desteği</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4 mb-8 sm:mb-12">
              <div className="bg-white/90 dark:bg-slate-800/90 rounded-2xl p-6 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 mx-auto">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">Hızlı</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Saniyeler içinde IBAN bulun</p>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 rounded-2xl p-6 shadow-xl border border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">Güvenli</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">AES-256 şifreleme</p>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 rounded-2xl p-6 shadow-xl border border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 mx-auto">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">Mobil</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Tüm cihazlarda çalışır</p>
              </div>
            </div>

            {/* Hero CTA Button */}
            <div className="text-center mb-8 sm:mb-12">
              <Link 
                to="/home" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg sm:text-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group"
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                İlk IBAN'ını Ekle
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Ücretsiz başlayın • Kayıt gerekmez • Hemen kullanın
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Target className="w-4 h-4" />
              Neden IBAN Kasa?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Günlük Hayatınızı Kolaylaştırın
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Sık kullandığınız IBAN'ları güvenli ve kullanışlı bir şekilde yönetmek için tasarlandı. 
              Artık her seferinde IBAN'ı aramak zorunda değilsiniz!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200 dark:border-blue-800 hover:scale-105 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Güvenli Saklama
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                Tüm IBAN bilgileriniz AES-256 şifreleme ile korunur. Veriler hiçbir zaman buluta gönderilmez, sadece cihazınızda saklanır.
              </p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">End-to-end şifreleme</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200 dark:border-green-800 hover:scale-105 hover:border-green-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Hızlı Erişim
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                Tek tıkla IBAN'ları kopyalayın, QR kod oluşturun. Akıllı arama ve filtreleme ile istediğiniz IBAN'ı anında bulun.
              </p>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Saniyeler içinde erişim</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-200 dark:border-purple-800 hover:scale-105 hover:border-purple-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Mobil Uyumlu
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                PWA desteği ile ana ekranınıza ekleyebilir, offline çalışabilirsiniz. Tüm cihazlarda mükemmel deneyim.
              </p>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Offline çalışma</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-200 dark:border-orange-800 hover:scale-105 hover:border-orange-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Akıllı Arama
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                İsim, açıklama ve etiketlerde arama yapın. Banka filtreleme ile istediğiniz IBAN'ı kolayca bulun.
              </p>
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Gelişmiş filtreleme</span>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-200 dark:border-pink-800 hover:scale-105 hover:border-pink-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Copy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Kolay Paylaşım
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                IBAN'ları tek tıkla kopyalayın, QR kod oluşturun. Aile ve arkadaşlarınızla kolayca paylaşın.
              </p>
              <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Tek tıkla kopyalama</span>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-indigo-200 dark:border-indigo-800 hover:scale-105 hover:border-indigo-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                QR Kod Desteği
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                Her IBAN için otomatik QR kod oluşturulur. Mobil bankacılık uygulamalarında kolayca tarayın.
              </p>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Anında QR kod</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Clock className="w-4 h-4" />
              Nasıl Çalışır?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Sadece 3 Adım
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
              IBAN'larınızı güvenli şekilde saklamaya başlayın
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0 relative">
                1
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping"></div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 flex-1 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  IBAN Ekle
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  "IBAN Ekle" butonuna tıklayın ve IBAN bilgilerinizi girin. Sistem otomatik olarak banka adını tespit eder ve formatını düzenler.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0 relative">
                2
                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 shadow-xl border border-green-200 dark:border-green-800 flex-1 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Kategorilere Ayır
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  Etiketler ekleyerek IBAN'larınızı kategorilere ayırın. Kira, aile, iş gibi kategoriler oluşturun ve kolayca bulun.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0 relative">
                3
                <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-ping"></div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 shadow-xl border border-purple-200 dark:border-purple-800 flex-1 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Kolayca Eriş
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  Arama yapın, filtreleyin ve tek tıkla IBAN'larınızı kopyalayın. QR kod ile kolayca paylaşın ve mobil bankacılıkta kullanın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Footer */}
      <div className="py-16 bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">IBAN Kasa</h3>
                  <p className="text-gray-400">Güvenli IBAN Yönetimi</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                IBAN'larınızı güvenli ve kullanışlı bir şekilde yönetmek için tasarlanmış modern web uygulaması. 
                Günlük hayatınızı kolaylaştırın!
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>Made with love by Mustafa Karaçuha</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-bold mb-6">Özellikler</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  AES-256 Şifreleme
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  PWA Desteği
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Offline Çalışma
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  QR Kod Oluşturma
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Akıllı Arama
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Banka Filtreleme
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6">İletişim</h4>
              <div className="space-y-4">
                <a 
                  href="https://github.com/mustafakaracuha/iban-kasa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://twitter.com/muskaracuha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <span>Twitter</span>
                </a>
                <a 
                  href="https://linkedin.com/in/mustafakaracuha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:karacuhaa58@gmail.com" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>E-posta</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 IBAN Kasa. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
