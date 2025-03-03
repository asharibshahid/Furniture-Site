"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';
const slides = [
  {
    id: 1,
    title: "Elegant & Stylish Furniture",
    description: "Upgrade your home with our premium furniture collection.",
    image: "/th1.jpg",
  },
  {
    id: 2,
    title: "Modern Wooden Designs",
    description: "Explore our handcrafted wooden masterpieces.",
    image: "/th2.jpg",
  },
  {
    id: 3,
    title: "Comfort & Luxury",
    description: "Experience comfort like never before with our sofas & chairs.",
    image: "/th5.jpg",
  },
  {
    id: 4,
    title: "Rattan & Wicker Collection",
    description: "Experience comfort like never before with our sofas & chairs.",
    image: "/th4.jpg",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      slideRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content with GSAP Animation */}
      <div
        ref={slideRef}
        className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white space-y-4 max-w-lg"
      >
        <h1 className="text-4xl md:text-6xl font-bold">{slides[current].title}</h1>
        <p className="text-lg">{slides[current].description}</p>
        <Link href= "/shop">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-800 transition rounded-full text-white text-lg">
          Shop Now
        </button>
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full text-white"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full text-white"
      >
        <ChevronRight size={30} />
      </button>
    </section>
  );
};

export default HeroSection;
