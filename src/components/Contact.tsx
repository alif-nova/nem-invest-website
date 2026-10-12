"use client";

import { motion } from "motion/react";
import { Phone, Mail, Star } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 pt-20 overflow-hidden bg-surface"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-3 h-3 border-2 border-primary rounded-full"></div>
      <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-primary rounded-full"></div>
      <div className="absolute bottom-10 right-1/4 w-4 h-4 border-4 border-primary/50 rounded-full"></div>
      <div className="absolute bottom-20 right-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-primary opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Circular Image with Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden border-[15px] border-border shadow-2xl">
                <Image
                  src="/images/contact-image.jpg"
                  alt="Team Meeting"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold text-sm uppercase tracking-wider mb-4 block">
                - Getting Started is Easy
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                To Make Your Claim <br />
                Contact Us On Given <br />
                <span className="text-primary">Social Platforms.</span>
              </h2>
              <p className="text-muted text-lg mb-10 max-w-xl leading-relaxed">
                Our team is ready to assist you with product inquiries,
                collaborations, or support; quickly and efficiently
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Contact Item 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center shadow-md text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-muted text-sm">Call For Active Now</p>
                    <p className="text-white font-bold text-lg">
                      +45 50 13 77 74
                    </p>
                  </div>
                </div>

                {/* Contact Item 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center shadow-md text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-muted text-sm">Say Hello</p>
                    <p className="text-primary font-bold text-lg">
                      contact@nem-invest.dk
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
