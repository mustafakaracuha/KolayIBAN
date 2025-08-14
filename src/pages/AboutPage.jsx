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
} from "lucide-react";

function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-12 pb-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            {/* App Logo */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl font-normal text-gray-900 dark:text-gray-100 mb-6">
              KolayIBAN Nedir?
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              KolayIBAN, IBAN'larınızı güvenli ve kullanışlı bir şekilde
              yönetmenizi sağlayan modern bir web uygulamasıdır. Artık IBAN'ları
              not defterinde aramaya gerek yok.
            </p>
            <div className="mb-8 mt-8">
            <Link
              to="/home"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-normal text-base transition-colors underline"
            >
              Hemen Başlayın →
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* What is it Section */}
      <section className="py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-6">
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
      </section>

      {/* How to Use Section */}
      <section className="py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-normal text-gray-900 dark:text-gray-100 mb-8">
            Nasıl Kullanılır?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-normal text-gray-900 dark:text-gray-100 mb-3">
                1. IBAN Ekleme
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                "Yeni IBAN Ekle" butonuna tıklayın ve IBAN bilgilerini girin.
                Sistem otomatik olarak banka adını tespit eder ve IBAN formatını
                düzenler. İsim, açıklama ve etiketler ekleyerek IBAN'ınızı
                kategorilere ayırabilirsiniz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-gray-900 dark:text-gray-100 mb-3">
                2. Arama ve Filtreleme
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Arama kutusuna isim, açıklama veya etiket yazarak IBAN'larınızı
                bulabilirsiniz. Banka filtreleme özelliği ile belirli bir
                bankanın IBAN'larını listeleyebilirsiniz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-gray-900 dark:text-gray-100 mb-3">
                3. Kopyalama ve Paylaşım
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                IBAN'ları tek tıkla kopyalayabilir, QR kod oluşturabilirsiniz.
                QR kodları mobil bankacılık uygulamalarında kolayca
                tarayabilirsiniz. IBAN'ları gizleyebilir ve gerektiğinde tekrar
                görünür yapabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-6">
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  İnternet olmadan da kullanın
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <footer className="py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6">
            <h3 className="text-lg font-normal text-gray-900 dark:text-gray-100 mb-2">
              KolayIBAN
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              IBAN'larınızı güvenli ve kullanışlı bir şekilde yönetmek için
              tasarlanmış modern web uygulaması.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 font-normal italic">Made with love by Mustafa Karaçuha</span>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/mustafakaracuha/KolayIban"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/muskaracuha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mustafakaracuha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:karacuhaa58@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 KolayIBAN. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default AboutPage;
