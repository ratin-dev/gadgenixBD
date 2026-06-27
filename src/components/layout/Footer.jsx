import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-4xl font-black">
            Gadgenix <span className="text-blue-500">BD</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Bangladesh's trusted destination for premium gadgets and accessories.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-6">Shop</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Headphones</li>
            <li>Smart Watch</li>
            <li>Speaker</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-6">Contact</h3>

          <div className="space-y-4 text-gray-400">
            <p className="flex items-center gap-3">
              <MapPin size={18} />
              Dhaka, Bangladesh
            </p>

            <p className="flex items-center gap-3">
              <Phone size={18} />
              +8801XXXXXXXXX
            </p>

            <p className="flex items-center gap-3">
              <Mail size={18} />
              info@gadgenixbd.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-6">Follow Us</h3>

          <div className="flex gap-4">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 text-center text-gray-500">
        © {new Date().getFullYear()} Gadgenix BD. All rights reserved.
      </div>
    </footer>
  );
}