import { Shield, Sparkles, Github, Twitter, Linkedin, Mail, Code, MessageSquare } from "lucide-react";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full md:max-w-4xl mx-0 sm:mx-0 md:mx-auto bg-gradient-to-r from-white via-gray-50 to-white dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-none md:rounded-br-2xl md:rounded-bl-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo ve başlık */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                IBAN Kasa
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                IBAN'larınızı kolayca yönetin
              </p>
            </div>
          </div>

          {/* Sağ taraf - Sosyal medya ve geliştirici (sadece desktop) */}
          <div className="hidden md:flex flex-col items-end gap-1">
            {/* Geliştirici */}
            <div className="text-xs text-gray-700 dark:text-gray-300">
              <span className="font-semibold">by Mustafa Karaçuha</span>
            </div>
            <div className="flex items-center justify-end gap-1 md:gap-2">
              <a
                href="https://github.com/mustafakaracuha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a
                href="https://twitter.com/muskaracuha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-300"
                title="Twitter"
              >
                <Twitter className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a
                href="https://linkedin.com/in/mustafakaracuha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a
                href="mailto:karacuhaa58@gmail.com"
                className="p-1.5 md:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-300"
                title="E-posta"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
            {/* Kaynak ve geri bildirim linkleri */}
            <div className="hidden md:flex items-center justify-end gap-3 text-[11px] text-gray-600 dark:text-gray-400 mt-1">
              <a
                href="https://github.com/mustafakaracuha/iban-kasa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white hover:underline flex items-center gap-1"
              >
                <Code className="w-3 h-3" />
                Kaynak Kodu
              </a>
              <span className="opacity-50">•</span>
              <a href="mailto:karacuhaa58@gmail.com" className="hover:text-gray-900 dark:hover:text-white hover:underline flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                Geri Bildirim
              </a>
            </div>
            <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-1 flex items-center gap-2">
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
