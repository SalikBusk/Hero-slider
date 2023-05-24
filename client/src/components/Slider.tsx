'use client';

import { useEffect, useState } from "react";

// icons 
import { RxDotFilled } from "react-icons/rx";

interface SliderProps {
  slides: {
    url: string;
    label: string;
    subtitle: string;
  }[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <section className="w-full relative group">
        <main
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-[550px] rounded-[10px] bg-center bg-cover duration-500 px-[15px]"
        >
          <div className="absolute inset-0 rounded-[10px] bg-[#222] opacity-[30%]" />
          <div className="flex top-4 py-2 z-30 text-[#f0f0f0]">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="text-xl cursor-pointer z-30 text-[#f0f0f0]"
                onClick={() => setCurrentIndex(slideIndex)}
              >
                <RxDotFilled
                  size={30}
                  color={slideIndex === currentIndex ? "#ffff" : "#ccc"}
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-[50px] -translate-x-0 w-[100%] sm:w-[100%] md:w-[60%]">
            <div className="text-[#fff] text-[26px] sm:text-[26px] md:text-[32px] font-[500]">
              {slides[currentIndex].label}
            </div>
            <div className="text-[#f0f0f0] w-[80%] text-[16px] sm:text-[16px] md:text-[19px] font-[400]">
              {slides[currentIndex].subtitle}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Slider;
