import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SanityFetch } from "@/sanity/lib/fetch";
import { Tables } from "@/sanity/lib/queries";

type TablesItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
};

export default async function TablesCard() {
  const Data: TablesItem[] = await SanityFetch({ query: Tables });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-zinc-400 to-purple-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Luxury Tales Collection
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover comfort and elegance in every piece
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {Data.map((item) => (
            <div
              key={item.id} // Add the key prop here
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-amber-300 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out"
            >
              <Link href={`/d-route/${item.slug.current}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold text-blue-600">
                      {new Intl.NumberFormat('en-PK', {
                        style: 'currency',
                        currency: 'PKR',
                        minimumFractionDigits: 0,
                      }).format(item.price)}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {item.description}
                </p>

                <Link
                  href={`/Orders?product=${encodeURIComponent(
                    item.name
                  )}&price=${item.price}`}
                >
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                    <span>Buy Now</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}