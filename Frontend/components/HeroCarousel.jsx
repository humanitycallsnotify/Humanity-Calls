import React, { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://res.cloudinary.com/daokrum7i/image/upload/f_auto,q_60,w_800,c_limit/v1768556077/landing_page3_dlrxfk.jpg",
  "https://res.cloudinary.com/daokrum7i/image/upload/f_auto,q_auto,w_1200,c_limit/v1768555729/landing_page4_yjkb6r.png",
  "https://res.cloudinary.com/daokrum7i/image/upload/f_auto,q_auto,w_1200,c_limit/v1768555360/landing_page2_inavn7.webp",
  "https://res.cloudinary.com/daokrum7i/image/upload/f_auto,q_auto,w_1200,c_limit/v1768555429/landing_page5_ebletc.jpg",
  "https://res.cloudinary.com/daokrum7i/image/upload/f_auto,q_auto,w_1200,c_limit/v1768555357/landing_page8_zcjgcn.jpg",
  "https://res.cloudinary.com/daokrum7i/image/upload/f_auto,q_auto,w_1200,c_limit/v1768555358/landing_page7_yzqyda.jpg",
  "https://res.cloudinary.com/daokrum7i/image/upload/f_auto,q_auto,w_1200,c_limit/v1768555359/landing_page6_lvaoju.jpg",
  "https://res.cloudinary.com/daokrum7i/image/upload/f_auto,q_auto,w_1200,c_limit/v1768555359/landing_page1_jdiydd.jpg",
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    // Delay slider activation to prioritize LCP image
    const timer = setTimeout(() => setShowSlider(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSlider) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 4000); // Increased interval slightly for better UX
    return () => clearInterval(interval);
  }, [showSlider]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* LCP Primary Image - Always rendered */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          currentIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={HERO_IMAGES[0]}
          alt="Slide 1"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="800"
          height="533"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      {/* Subsequent images loaded only after slider activation */}
      {showSlider &&
        HERO_IMAGES.slice(1).map((image, index) => {
          const actualIndex = index + 1;
          return (
            <div
              key={actualIndex}
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                actualIndex === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${actualIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          );
        })}
      {/* Black light overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
};

export default HeroCarousel;
