import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div>
        <br />
        <br />
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">FurnitureStore</h2>
          <p className="mt-3 text-sm">
            High-quality furniture with elegant designs. Your comfort, our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-blue-600">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center space-x-2">
              <MapPin size={18} /> <span>Karachi, Pakistan</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} /> <span>+92 300 1234567</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} /> <span>info@furniturestore.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} FurnitureStore. All Rights Reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://facebook.com" className="hover:text-blue-600">
            <Facebook size={20} />
          </Link>
          <Link href="https://instagram.com" className="hover:text-blue-600">
            <Instagram size={20} />
          </Link>
          <Link href="https://twitter.com" className="hover:text-blue-600">
            <Twitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
