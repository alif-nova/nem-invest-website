"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <img
              src={"/images/logo.png"}
              className="w-28 sm:w-32 md:w-36 lg:w-40 object-contain"
            />

            <p className="text-silver/70 leading-relaxed">
              NEM INVEST is a leading technology partner, creating innovative,
              scalable digital products that empower businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-primary">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {["home", "about us", "contact us"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.split(" ")[0]}`}
                    className="text-silver/70 hover:text-primary transition-colors flex items-center gap-2 capitalize"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-primary">
              Contact Us
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-silver/70">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Bagsværd, Denmark</span>
              </li>

              <li className="flex items-center gap-3 text-silver/70">
                <Mail size={20} className="text-primary shrink-0" />
                <span>contact@nem-invest.dk</span>
              </li>

              <li className="flex items-center gap-3 text-silver/70">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+45 50 13 77 74</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-silver/40 text-sm">
          <p>© 2026 NEM INVEST. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
