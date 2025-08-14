import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Smartphone, 
  Search, 
  Copy, 
  ChevronDown,
  QrCode, 
  Lock, 
  Globe,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Star,
  Heart,
  CheckCircle,
  TrendingUp,
  Clock,
  Target,
  ArrowUp
} from 'lucide-react';

function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Hero Section */}
      <section className="pt-6 sm:pt-10 pb-8 sm:pb-12 relative overflow-hidden" aria-labelledby="hero-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Content */}
          <div className="text-center mb-8 sm:mb-16">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 shadow-2xl relative" role="img" aria-label="KolayIBAN logosu">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>
            
            <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              KolayIBAN
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
              IBAN'larınızı güvenli ve kullanışlı bir şekilde yönetin. 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Artık IBAN'ları not defterinde aramaya gerek yok!</span>
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 md:mb-8 px-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-4 mb-6 sm:mb-8 md:mb-12">
              <article className="bg-white/90 dark:bg-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-3 sm:mb-4 mx-auto">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2 text-center">Hızlı</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center">Saniyeler içinde IBAN bulun</p>
              </article>
              <article className="bg-white/90 dark:bg-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-xl border border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-3 sm:mb-4 mx-auto">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2 text-center">Güvenli</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center">AES-256 şifreleme</p>
              </article>
              <article className="bg-white/90 dark:bg-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-xl border border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-3 sm:mb-4 mx-auto">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2 text-center">Mobil</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center">Tüm cihazlarda çalışır</p>
              </article>
            </div>

            {/* Hero CTA Button */}
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <Link 
                to="/home" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-200"
                aria-label="İlk IBAN'ınızı eklemek için ana sayfaya gidin"
              >
                İlk IBAN'ını Ekle
              </Link>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3">
                Ücretsiz başlayın • Kayıt gerekmez • Hemen kullanın
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 animate-bounce">
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
              </div>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500 mt-1 sm:mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative" aria-labelledby="features-title">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Target className="w-4 h-4" />
              Neden KolayIBAN?
            </div>
            <h2 id="features-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Günlük Hayatınızı Kolaylaştırın
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Sık kullandığınız IBAN'ları güvenli ve kullanışlı bir şekilde yönetmek için tasarlandı. 
              Artık her seferinde IBAN'ı aramak zorunda değilsiniz!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <article className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200 dark:border-blue-800 hover:scale-105 hover:border-blue-300">
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
            </article>

            {/* Feature 2 */}
            <article className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200 dark:border-green-800 hover:scale-105 hover:border-green-300">
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
            </article>

            {/* Feature 3 */}
            <article className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-200 dark:border-purple-800 hover:scale-105 hover:border-purple-300">
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
            </article>

            {/* Feature 4 */}
            <article className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-200 dark:border-orange-800 hover:scale-105 hover:border-orange-300">
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
            </article>

            {/* Feature 5 */}
            <article className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-200 dark:border-pink-800 hover:scale-105 hover:border-pink-300">
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
            </article>

            {/* Feature 6 */}
            <article className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-indigo-200 dark:border-indigo-800 hover:scale-105 hover:border-indigo-300">
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
            </article>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="how-it-works-title">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Clock className="w-4 h-4" />
              Nasıl Çalışır?
            </div>
            <h2 id="how-it-works-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Sadece 3 Adım
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
              IBAN'larınızı güvenli şekilde saklamaya başlayın
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Step 1 */}
            <article className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group">
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
            </article>

            {/* Step 2 */}
            <article className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group">
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
            </article>

            {/* Step 3 */}
            <article className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group">
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
            </article>
          </div>
        </div>
      </section>

      {/* Yukarı Çık Butonu */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
          title="Yukarı Çık"
          aria-label="Sayfanın en üstüne çık"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white relative" role="contentinfo">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg" role="img" aria-label="KolayIBAN logosu">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">KolayIBAN</h3>
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
                  href="https://github.com/mustafakaracuha/KolayIban" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  aria-label="GitHub profilini ziyaret et"
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
                  aria-label="Twitter profilini ziyaret et"
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
                  aria-label="LinkedIn profilini ziyaret et"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:karacuhaa58@gmail.com" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  aria-label="E-posta gönder"
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
            <p>© 2025 KolayIBAN. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default AboutPage;
