import { SanityFetch } from "@/sanity/lib/fetch";
import { AllProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import ProductSwiper from "./ProductSwiper";

export default async function AllProductsPage() {
  let products: Product[] = [];

  try {
    products = await SanityFetch({ query: AllProducts });
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 tracking-wide">
        Explore Our Premium Furniture Collection
      </h1>
      <ProductSwiper products={products} />
    </div>
  );
}