"use client"; // Mark this as a client component

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSwiperProps {
  products: Product[];
}

export default function ProductSwiper({ products }: ProductSwiperProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      navigation
      autoplay={{ delay: 3000 }}
      loop
      pagination={{ clickable: true }}
      className="w-full"
    >
      {products.map((product: Product) => (
        <SwiperSlide key={product.slug.current}>
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl relative">
            <Link href={`/d-route/${product.slug.current}`}>
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </Link>
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500 uppercase">{product._type}</p>
              <p className="text-xl font-bold text-blue-600 mt-2">{product.price} PKR</p>
              <Link
                href={`/Orders?product=${encodeURIComponent(product.name)}&price=${product.price}`}
              >
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}