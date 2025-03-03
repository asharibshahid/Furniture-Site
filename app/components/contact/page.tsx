"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Animation for form elements
  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(inputRefs.current, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(formRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.75)",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(formRef.current!);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Web3Forms API endpoint and API key
    const web3FormsAPI = "https://web3forms.com/api/v1/submit";
    const apiKey = "f932ea9d-503b-4d19-86ae-e2a6cd033863"; // Replace with your Web3Forms API key

    try {
      const response = await fetch(web3FormsAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          ...data,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsFormSubmitted(true);
        setError(null); // Clear any previous errors
      } else {
        setError(result.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError(`Something went wrong. Please try again. ${err}`);
    }
  };

  return (
    <div className="contact-us-container bg-gradient-to-r from-green-400 to-blue-500 py-12 px-8 text-white">
      <h2
        ref={headerRef}
        className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn"
      >
        <br />
        Get in Touch with Us
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      >
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-6">
          <input
            ref={(el) => (inputRefs.current[0] = el!)}
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 text-lg rounded border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-6">
          <input
            ref={(el) => (inputRefs.current[1] = el!)}
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 text-lg rounded border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            ref={(el) => (inputRefs.current[2] = el!)}
            name="message"
            placeholder="Your Message"
            className="w-full p-4 text-lg rounded border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={4}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isFormSubmitted ? "Thank You!" : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
