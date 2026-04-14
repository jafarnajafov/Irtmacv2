// app/(components)/Modal/ManualModal.js  (Veya dosya yolunuza göre ayarlayın)
"use client"; // Bu bileşen, kapatma işlemi için istemci tarafı etkileşimine ihtiyaç duyar.

import { useEffect } from "react";
import { CgClose } from "react-icons/cg";

// Helper fonksiyonu: YouTube linklerini (watch, shorts, youtu.be) embed linkine çevirir
const getEmbedUrl = (url) => {
  if (!url) return "";
  try {
    const urlObj = new URL(url);
    let videoId = null;

    // Durum 1: Standart 'watch' linki (youtube.com/watch?v=...)
    if (
      urlObj.hostname.includes("youtube.com") &&
      urlObj.searchParams.has("v")
    ) {
      videoId = urlObj.searchParams.get("v");
    }
    // Durum 2: YouTube Shorts linki (youtube.com/shorts/...)
    else if (
      urlObj.hostname.includes("youtube.com") &&
      urlObj.pathname.includes("/shorts/")
    ) {
      // Pathname '/shorts/VIDEO_ID' şeklinde olacaktır
      const pathParts = urlObj.pathname.split("/");
      // Dizinin son elemanı video ID'sidir
      videoId = pathParts[pathParts.length - 1];
    }
    // Durum 3: Kısaltılmış youtu.be linki (youtu.be/...)
    else if (urlObj.hostname.includes("youtu.be")) {
      // Pathname '/VIDEO_ID' şeklinde olacaktır, baştaki '/' karakterini kaldırırız
      videoId = urlObj.pathname.substring(1);
    }

    // Eğer bir videoId bulduysak, embed URL'ini oluştur
    if (videoId) {
      // ID'nin sonunda olabilecek (?feature=share gibi) sorgu parametrelerini temizle
      const cleanVideoId = videoId.split("?")[0];
      return `https://www.youtube.com/embed/${cleanVideoId}?autoplay=0`;
    }

    // Eğer tanınan bir YouTube formatı değilse orijinal linki döndür
    return url;
  } catch (error) {
    console.error("Video URL'si ayrıştırılırken hata oluştu:", error);
    return ""; // Hata durumunda boş döndür
  }
};

const ManualModal = ({ isOpen, onClose, videoUrl }) => {
  // Effect to handle Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent background scrolling when modal is open
      document.documentElement.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleEscape);
      // Restore background scrolling
      document.documentElement.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Ensure scrolling is restored if component unmounts while open
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const embedUrl = getEmbedUrl(videoUrl);

  // Render nothing if not open
  if (!isOpen) return null;

  return (
    // Backdrop / Overlay
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-black bg-opacity-70`}
      onClick={onClose} // Close modal when clicking backdrop
    >
      {/* Modal Content */}
      <div
        className={`bg-transparent rounded-lg shadow-xl transform transition-all duration-300 ease-out w-full max-w-4xl mx-4 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-10"
          aria-label="Close modal"
        >
          <CgClose />
        </button>

        {/* Video Iframe Container (aspect ratio trick) */}
        <div className="aspect-w-16 aspect-h-9">
          {embedUrl && embedUrl.includes("youtube.com/embed") ? (
            <iframe
              className="w-full h-[500px]"
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
              Video yüklenemedi veya geçersiz URL.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManualModal;
