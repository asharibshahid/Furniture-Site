"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export  default function AboutUs() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="/th5.jpg"
          alt="Luxury Living Room"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <h1 className="absolute text-white text-5xl font-bold drop-shadow-lg">
          About <span className="text-yellow-400">Ananya Furniture</span>
        </h1>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto text-center py-16">
        <h2 className="text-4xl font-bold text-gray-800">Timeless Elegance Since 1995</h2>
        <p ref={textRef} className="mt-4 text-lg text-gray-600 leading-relaxed">
          From a small workshop in Karachi to a leading name in premium furniture, **Ananya
          Furniture** is built on a passion for craftsmanship and an obsession with perfection.
          Founded by **Rahul Verma**, every piece tells a story of elegance and comfort.
        </p>
      </div>

      {/* Image with Animation */}
      <div ref={imageRef} className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-2xl">
        <Image
          src="/craftsmanship.jpg"
          alt="Craftsmanship"
          layout="fill"
          objectFit="cover"
          className="scale-105 hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Our Journey */}
      <div className="grid md:grid-cols-2 gap-12 px-6 mt-16">
        <div>
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">The Art of Craftsmanship</h3>
          <p className="text-gray-600 text-lg">
            Our skilled artisans combine **traditional woodworking techniques** with **modern
            aesthetics** to create furniture that lasts a lifetime. Each piece is a work of art.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Customer First Approach</h3>
          <p className="text-gray-600 text-lg">
            We believe in delivering **excellence with every order**. From design selection to final
            delivery, our team ensures a seamless experience for our customers.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 mt-16 py-12 px-6 text-white rounded-xl shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold">Our Mission & Vision</h3>
          <p className="mt-4 text-lg">
            We strive to transform homes with furniture that blends **luxury, comfort, and
            durability**. Our vision is to be **Pakistan’s No.1 choice** for premium home decor.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <h3 className="text-4xl font-bold text-gray-800">Experience Luxury Like Never Before</h3>
        <p className="text-gray-600 mt-2 text-lg">
          Visit our store or explore our online collection to find the perfect piece for your home.
        </p>
        <a
          href="/products"
          className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}
