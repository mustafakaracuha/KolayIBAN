import { Plus } from "lucide-react";

function FloatingAddButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-full shadow-xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center touch-friendly"
      title="IBAN Ekle"
      aria-label="IBAN Ekle"
    >
      <Plus className="w-6 h-6 sm:w-7 sm:h-7" />
    </button>
  );
}

export default FloatingAddButton;
