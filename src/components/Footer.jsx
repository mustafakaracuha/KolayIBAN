import { Github, Twitter, Linkedin, Mail, Lock } from "lucide-react";

function Footer() {
  return (
    <footer className="md:hidden mt-2 pb-20 px-4">
      <div className="bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-4 text-center shadow-soft">
        <div className="h-1 w-12 mx-auto bg-gradient-primary rounded-full mb-3 animate-pulse" />
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
          © 2025 <span className="font-semibold">IBAN Kasa</span>
        </p>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-3">
          by <a href="https://github.com/mustafakaracuha" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2">Mustafa Karaçuha</a>
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/mustafakaracuha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-white/10 rounded-xl transition-all duration-300 shadow-sm"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com/muskaracuha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-white/10 rounded-xl transition-all duration-300 shadow-sm"
            title="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/mustafakaracuha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-white/10 rounded-xl transition-all duration-300 shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:karacuhaa58@gmail.com"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-white/10 rounded-xl transition-all duration-300 shadow-sm"
            title="E-posta"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
          <Lock className="w-3.5 h-3.5" />
          <span>Veriler cihazınızda saklanır</span>
          <span className="text-gray-300">•</span>
          <span>Made with ❤️</span>
        </div>
        <div className="mt-2 flex items-center justify-center gap-3 text-xs">
          <a href="https://github.com/mustafakaracuha/iban-kasa" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kaynak Kodu</a>
          <span className="text-gray-300">•</span>
          <a href="mailto:karacuhaa58@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Geri Bildirim</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


