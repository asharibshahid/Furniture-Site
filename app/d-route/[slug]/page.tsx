
import { SanityFetch } from "@/sanity/lib/fetch";
import { AllProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Fetch all products and find the one matching the slug
async function getProduct(slug: string): Promise<Product | undefined> {
  const products: Product[] = await SanityFetch({ query: AllProducts });
  return products.find((item) => item.slug.current === slug);
}

// Generate static paths for all products
export async function generateStaticParams() {
  const products: Product[] = await SanityFetch({ query: AllProducts });

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

// Main component using the generated type directly
export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // Fetch the product based on the slug
  const product = await getProduct(params.slug);

  // If the product is not found, return a 404 page
  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="w-full relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-5xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          <p className="text-3xl font-bold text-blue-600 mt-4">
            {product.price} PKR
          </p>
          <p className="text-md text-gray-500 mt-1">
            Category: {product._type.toUpperCase()}
          </p>

          {/* Buy Now Button */}
          <Link
            href={`/Orders?product=${encodeURIComponent(
              product.name
            )}&price=${product.price}`}
          >
            <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-green-900 transition-all duration-300">
              Buy Now
            </button>
          </Link>

          {/* Back to Products */}
          <Link href="/shop">
            <p className="mt-4 text-blue-500 hover:underline cursor-pointer">
              ← Back to Products
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
