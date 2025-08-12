import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";

function Header() {
  return (
    <div className="bg-gradient-primary shadow-modern overflow-hidden fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-3 sm:px-4 md:max-w-4xl lg:max-w-5xl md:mx-auto md:px-4 py-3 sm:py-4 md:py-6 mobile-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-3 bg-white/20 rounded-xl md:rounded-2xl backdrop-blur-sm">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-white mb-1">
                IBAN Kasa
              </h1>
              <p className="text-white/80 text-xs md:text-sm flex items-center gap-1 md:gap-2">
                <span>IBAN'larınızı kolayca yönetin</span>
              </p>
            </div>
          </div>

          {/* Mobil sağ alan boş bırakıldı */}
          <div className="flex md:hidden items-center gap-2" />

          {/* Sağ taraf - Sosyal medya ve geliştirici (sadece desktop) */}
          <div className="hidden md:flex flex-col items-end gap-1">
            {/* Geliştirici */}
            <div className="text-xs text-white/80">
              <span className="font-medium">by Mustafa Karaçuha</span>
            </div>
            <div className="flex items-center justify-end gap-1 md:gap-2">
              <a
                href="https://github.com/mustafakaracuha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a
                href="https://twitter.com/muskaracuha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-300"
                title="Twitter"
              >
                <Twitter className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a
                href="https://linkedin.com/in/mustafakaracuha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a
                href="mailto:karacuhaa58@gmail.com"
                className="p-1.5 md:p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-300"
                title="E-posta"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
            {/* Kaynak ve geri bildirim linkleri */}
            <div className="hidden md:flex items-center justify-end gap-3 text-[11px] text-white/80 mt-1">
              <a
                href="https://github.com/mustafakaracuha/iban-kasa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Kaynak Kodu
              </a>
              <span className="opacity-50">•</span>
              <a href="mailto:karacuhaa58@gmail.com" className="hover:underline">Geri Bildirim</a>
            </div>
            <div className="text-[11px] text-white/70 mt-1 flex items-center gap-2">
              <span>© 2025 IBAN Kasa</span>
              <span className="opacity-50">•</span>
              <span>Veriler cihazınızda saklanır</span>
              <span className="opacity-50">•</span>
              <span>Made with ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
