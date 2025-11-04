export default function useSliderButtons(callback) {
  let data = null;
  let currentSlide = 0;

  // Banner verisini fetch ile al
  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/banner`);
      const fetchedData = await res.json();
      data = fetchedData;
      if (callback) callback(data); // Data'yı güncellemek için callback çağır
    } catch (error) {
      console.error("Veri alınırken hata oluştu:", error);
    }
  };

  // nextSlide fonksiyonu
  const nextSlide = () => {
    if (data && data.banner) {
      currentSlide =
        currentSlide === data.banner.length - 1 ? 0 : currentSlide + 1;
    }
  };

  // prevSlide fonksiyonu
  const prevSlide = () => {
    if (data && data.banner) {
      currentSlide =
        currentSlide === 0 ? data.banner.length - 1 : currentSlide - 1;
    }
  };

  // İlk veri çekme işlemini başlat
  fetchData();

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    getData: () => data, // Güncel veriyi almak için bir fonksiyon ekleyelim
  };
}
