"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(window.location.hash.replace("#", "") || "home");

    const onHashChange = () => setActive(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <img
          src={"/images/logo.png"}
          className="w-28 h-16 sm:w-32 md:w-36 md:h-20 lg:w-40 object-contain"
        />

        <div className="flex items-center gap-6 xl:gap-8">
          <div className="hidden md:flex items-center gap-6 xl:gap-8">
            {["home", "about", "process"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`hover:text-primary font-semibold transition-colors text-sm uppercase tracking-wider ${active === item.toLowerCase() ? "text-primary" : "text-silver"}`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="bg-primary hover:bg-primary/85 text-black px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 text-sm uppercase tracking-widest"
            onClick={() => router.push("/#contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
