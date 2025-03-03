"use client";

import { useEffect, useState } from "react";
import { SanityFetch } from "@/sanity/lib/fetch";
import { AllProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import "./flaming.css";

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await SanityFetch({ query: AllProducts });
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    gsap.from(".product-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, [products]);

  if (error) {
    return (
      <div className="text-center text-red-500 py-12 text-xl font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-br from-blue-50 via-zinc-400 to-purple-100">
        <br />
        <br />
      <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 dark:from-blue-500 dark:to-green-500 bg-clip-text text-transparent mb-8 tracking-wide">
        Explore Our Premium Furniture Collection
      </h1>

    { (
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {products.map((product, index) => (
            <div
              key={product.slug.current}
              className="product-card w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 bg-gray-900 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl relative border-4 border-yellow-400 dark:border-blue-500 hover:border-red-500 dark:hover:border-green-500 p-4"
            >
              <Link href={`/d-route/${product.slug.current}`}>
                <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-t-lg">
                  <Image
                    src={product.imageUrl || "/fallback-image.jpg"}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                    priority={index < 3}
                  />
                </div>

                <div className="p-2 text-center">
                  <h2 className="text-sm sm:text-lg font-semibold text-white truncate">
                    {product.name}
                  </h2>
                  <p className="text-xs text-gray-400 uppercase">{product._type}</p>
                  <p className="text-sm sm:text-lg font-bold text-yellow-400 dark:text-blue-400 mt-1">
                    {new Intl.NumberFormat("en-PK", {
                      style: "currency",
                      currency: "PKR",
                    }).format(product.price)}
                  </p>

                  <Link
                    href={`/Orders?product=${encodeURIComponent(product.name)}&price=${product.price}`}
                    passHref
                  >
                    <button
                      aria-label={`Buy ${product.name} for ${product.price} PKR`}
                      className="mt-2 w-full bg-gradient-to-r from-yellow-500 to-red-500 dark:from-blue-500 dark:to-green-500 text-white py-2 sm:py-3 rounded-lg font-semibold hover:from-red-500 hover:to-yellow-500 dark:hover:from-green-500 dark:hover:to-blue-500 transition-all duration-300"
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
