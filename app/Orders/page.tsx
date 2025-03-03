"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// OrderForm component
function OrderForm() {
  const searchParams = useSearchParams();
  const selectedProduct = searchParams?.get("product") || "";
  const selectedPrice = parseInt(searchParams?.get("price") || "0", 10);
  const selectedProductId = searchParams?.get("id") || ""; // Fetch Product ID

  const deliveryFee = 200;
  const totalPrice = selectedPrice + deliveryFee;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    addressl2: "",
    city: "",
    country: "",
    product: selectedProduct,
    price: selectedPrice,
    id: selectedProductId, // Add Product ID
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for button

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product: selectedProduct,
      price: selectedPrice,
      id: selectedProductId, // Update Product ID
    }));
  }, [selectedProduct, selectedPrice, selectedProductId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button and change color to black

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "f932ea9d-503b-4d19-86ae-e2a6cd033863",
        ...formData,
      }),
    });

    if (response.ok) {
      alert("Your order has been placed!");
      setFormData({
        name: "",
        phone: "",
        address: "",
        addressl2: "",
        city: "",
        country: "",
        product: "",
        price: 0,
        id: "", // Reset Product ID
      });
    }

    setTimeout(() => setIsSubmitting(false), 3000); // Re-enable button after 3 seconds
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <br />
        <br />
        <h1 className="text-4xl font-bold text-center text-emerald-400 mb-8">
     Order Now We ll Contact You 
        </h1>
        <div className="w-full md:w-1/2 mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            Enter Your Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Address Line 2 (Optional)</label>
              <input
                type="text"
                name="addressl2"
                value={formData.addressl2}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
              />
            </div>
            <div className="text-white text-lg">
              <p>📦 <strong>Product:</strong> {formData.product}</p>
              <p>🆔 <strong>Product ID:</strong> {formData.id}</p>
              <p>💰 <strong>Product Price:</strong> {formData.price} PKR</p>
              <p>🚚 <strong>Home Delivery Fee:</strong> {deliveryFee} PKR</p>
              <p>🧾 <strong>Total Price:</strong> {totalPrice} PKR</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Click the Send Order button only once</label>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 font-semibold rounded-md transition-all ${
                  isSubmitting ? "bg-black cursor-not-allowed" : "bg-gradient-to-r from-emerald-400 to-indigo-500"
                }`}
              >
                {isSubmitting ? "Processing..." : "Send Order"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Export the component wrapped in Suspense
export default function OrderFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderForm />
    </Suspense>
  );
}