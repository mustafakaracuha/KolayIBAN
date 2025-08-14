import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  Smartphone,
  Search,
  QrCode,
  Lock,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  X,
} from "lucide-react";

function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-800">
      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <div className="flex items-start gap-4 md:gap-8 mb-16">
            {/* Content */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
                KolayIBAN
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 md:mb-6">
                IBAN'larınızı güvenli ve kullanışlı bir şekilde yönetin.
              </p>

              <div className="flex flex-col items-start gap-4">
                <Link
                  to="/home"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-base transition-colors flex items-center gap-2"
                >
                  İlk IBAN'ını Ekle
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>

            {/* App Logo */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* What is it Section */}
            <div>
              <h2 className="text-2xl font-normal text-gray-900 dark:text-gray-100 mb-6">
                Ne İşe Yarar?
              </h2>
              <div className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  KolayIBAN, sık kullandığınız IBAN'ları güvenli bir şekilde
                  saklamanızı ve hızlıca erişmenizi sağlar. Aile üyeleri,
                  arkadaşlar, iş ortakları veya herhangi bir kişinin IBAN'ını
                  kaydedebilir, kategorilere ayırabilir ve ihtiyaç duyduğunuzda
                  anında bulabilirsiniz.
                </p>
                <p>
                  Uygulama tamamen ücretsizdir, kayıt gerektirmez ve verileriniz
                  sadece cihazınızda saklanır. AES-256 şifreleme ile korunan
                  verileriniz hiçbir zaman buluta gönderilmez.
                </p>
              </div>
            </div>

            {/* Screenshots Section */}
            <div>
              <h2 className="text-2xl font-normal text-gray-900 dark:text-gray-100 mb-8">
                Ekran Görüntüleri
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-shadow duration-200">
                    <img
                      src="/screenshots/home.png"
                      alt="Ana Sayfa"
                      className="w-full h-48 object-cover"
                      onClick={() =>
                        setSelectedImage({
                          src: "/screenshots/home.png",
                          title: "Ana Sayfa",
                        })
                      }
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center">
                    Ana Sayfa
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-shadow duration-200">
                    <img
                      src="/screenshots/add-iban.png"
                      alt="IBAN Ekleme"
                      className="w-full h-48 object-cover"
                      onClick={() =>
                        setSelectedImage({
                          src: "/screenshots/add-iban.png",
                          title: "IBAN Ekleme",
                        })
                      }
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center">
                    IBAN Ekleme
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-shadow duration-200">
                    <img
                      src="/screenshots/qr.png"
                      alt="QR Kod"
                      className="w-full h-48 object-cover"
                      onClick={() =>
                        setSelectedImage({
                          src: "/screenshots/qr.png",
                          title: "QR Kod",
                        })
                      }
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center">
                    QR Kod
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-shadow duration-200">
                    <img
                      src="/screenshots/about.png"
                      alt="Hakkında"
                      className="w-full h-48 object-cover"
                      onClick={() =>
                        setSelectedImage({
                          src: "/screenshots/about.png",
                          title: "Hakkında",
                        })
                      }
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center">
                    Hakkında
                  </h3>
                </div>
              </div>
            </div>

            {/* How to Use Section */}
            <div>
              <h2 className="text-2xl font-normal text-gray-900 dark:text-gray-100 mb-8">
                Nasıl Kullanılır?
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-normal text-gray-900 dark:text-gray-100 mb-3">
                    1. IBAN Ekleme
                  </h3>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    "Yeni IBAN Ekle" butonuna tıklayın ve IBAN bilgilerini
                    girin. Sistem otomatik olarak banka adını tespit eder ve
                    IBAN formatını düzenler. İsim, açıklama ve etiketler
                    ekleyerek IBAN'ınızı kategorilere ayırabilirsiniz.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-gray-900 dark:text-gray-100 mb-3">
                    2. Arama ve Filtreleme
                  </h3>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    Arama kutusuna isim, açıklama veya etiket yazarak
                    IBAN'larınızı bulabilirsiniz. Banka filtreleme özelliği ile
                    belirli bir bankanın IBAN'larını listeleyebilirsiniz.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-gray-900 dark:text-gray-100 mb-3">
                    3. Kopyalama ve Paylaşım
                  </h3>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    IBAN'ları tek tıkla kopyalayabilir, QR kod
                    oluşturabilirsiniz. QR kodları mobil bankacılık
                    uygulamalarında kolayca tarayabilirsiniz. IBAN'ları
                    gizleyebilir ve gerektiğinde tekrar görünür yapabilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div>
              <h2 className="text-2xl font-normal text-gray-900 dark:text-gray-100 mb-8">
                Özellikler
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-normal text-gray-900 dark:text-gray-100 mb-1">
                      Güvenli Saklama
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      AES-256 şifreleme ile verileriniz korunur
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-normal text-gray-900 dark:text-gray-100 mb-1">
                      Hızlı Erişim
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Saniyeler içinde IBAN'larınıza erişin
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-normal text-gray-900 dark:text-gray-100 mb-1">
                      Akıllı Arama
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      İsim, açıklama ve etiketlerde arama
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <QrCode className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-normal text-gray-900 dark:text-gray-100 mb-1">
                      QR Kod
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Otomatik QR kod oluşturma
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-normal text-gray-900 dark:text-gray-100 mb-1">
                      Mobil Uyumlu
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      PWA desteği ile ana ekrana ekleyin
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-normal text-gray-900 dark:text-gray-100 mb-1">
                      Offline Çalışma
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      İnternet olmadan da kullanın
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Yukarı Çık Butonu */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          title="Yukarı Çık"
          aria-label="Sayfanın en üstüne çık"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    KolayIBAN
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    IBAN'larınızı kolayca yönetin.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Hızlı Bağlantılar
              </h4>
              <div className="space-y-2">
                <Link
                  to="/home"
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  IBAN'larım
                </Link>
                <Link
                  to="/"
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Hakkında
                </Link>
                <a
                  href="https://github.com/mustafakaracuha/KolayIban"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Özellikler
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>AES-256 Şifreleme</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>PWA Desteği</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Offline Çalışma</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>QR Kod Oluşturma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Made with Love */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="font-medium">Made with love by</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Mustafa Karaçuha
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mustafakaracuha/KolayIban"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/muskaracuha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                title="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mustafakaracuha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:karacuhaa58@gmail.com"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                KolayIBAN
              </span>
              . Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default AboutPage;
