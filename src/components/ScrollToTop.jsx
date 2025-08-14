import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Scroll pozisyonunu takip ediyoruz
  useEffect(() => {
    const toggleVisibility = () => {
      // Hem window scroll hem de container scroll'u kontrol ediyoruz
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const containerScroll = document.querySelector('.overflow-y-auto')?.scrollTop || 0
      
      if (scrollTop > 300 || containerScroll > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Window scroll event'ini ekliyoruz
    window.addEventListener('scroll', toggleVisibility)
    
    // Container scroll event'ini ekliyoruz
    const container = document.querySelector('.overflow-y-auto')
    if (container) {
      container.addEventListener('scroll', toggleVisibility)
    }
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      if (container) {
        container.removeEventListener('scroll', toggleVisibility)
      }
    }
  }, [])

  // Yukarı çık fonksiyonunu oluşturuyoruz
  const scrollToTop = () => {
    // Önce container'ı yukarı çıkarıyoruz
    const container = document.querySelector('.overflow-y-auto')
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    // Sonra window'u da yukarı çıkarıyoruz
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[9999] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
          title="Yukarı çık"
        >
          <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
