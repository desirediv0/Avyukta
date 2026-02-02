import Link from "next/link";
import { Instagram, Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div className="text-center md:text-left">
         <Image src="/logo.png" alt="Logo" width={100} height={100} className="mx-auto md:mx-0" />
          <p className="text-primary-foreground/70 font-light max-w-xs mx-auto md:mx-0">
            Luxury House of Indian Soul. Experiential living through fragrance, sound, and stillness.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Link href="https://www.instagram.com/avyuktaenterprises" target="_blank" className="hover:text-secondary transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.avyuktaenterprises.com" target="_blank" className="hover:text-secondary transition-colors">
              <Globe className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="font-serif text-xl mb-6">Explore</h3>
          <ul className="space-y-3 font-light">
            <li><Link href="#" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link href="#offerings" className="hover:text-secondary transition-colors">Offerings</Link></li>
            <li><Link href="#workshop" className="hover:text-secondary transition-colors">Workshops</Link></li>
            <li><Link href="#" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-right">
          <h3 className="font-serif text-xl mb-6">Visit Us</h3>
          <ul className="space-y-4 font-light text-sm opacity-90">
            <li className="flex gap-2 justify-center md:justify-end items-start leading-relaxed">
              <MapPin className="w-5 h-5 shrink-0 text-secondary" />
              <span>D-333, Block D, Defence Colony,<br/>New Delhi – 110024</span>
            </li>
            <li className="flex gap-2 justify-center md:justify-end items-center">
              <Phone className="w-4 h-4 text-secondary" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-2 justify-center md:justify-end items-center">
              <Mail className="w-4 h-4 text-secondary" />
              <span>contact@avyuktaenterprises.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm font-light opacity-50">
        <p>&copy; 2026 Avyukta Enterprises | All Rights Reserved</p>
      </div>
    </footer>
  );
}
