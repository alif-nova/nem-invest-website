import { motion } from "motion/react";
import { Code, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black py-24 pb-20 lg:py-30 2xl:py-35"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-left">
            <div className="flex gap-0 lg:gap-12 2xl:gap-0 items-center">
              <div className="flex-1">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block"
                >
                  - Technology That Moves You Forward
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-6xl font-black text-white leading-[0.9] mb-8 tracking-tighter"
                >
                  Building <br />
                  <span className="text-primary">
                    Technology with Purpose
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted text-xl mb-4 lg:mb-0 2xl:mb-12 max-w-xl leading-relaxed"
                >
                  We build technology with purpose. Our expertise in advanced
                  software engineering and digital transformation enables
                  businesses to optimize performance, strengthen competitive
                  advantage, and accelerate long-term value creation.
                </motion.p>
              </div>

              {/* For small and medium desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex-1 relative hidden lg:flex 2xl:hidden"
              >
                <div className="relative z-10">
                  <img
                    src="/images/hero-image.jpg"
                    alt="Technology Illustration"
                    className="rounded-3xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              </motion.div>
            </div>

            <div className="space-y-2 lg:space-y-6 block lg:hidden 2xl:block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-6 max-w-md bg-card border border-border hover:bg-card/80 hover:rounded-2xl hover:shadow-xl hover:shadow-primary/5 hover:border hover:border-primary/20"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Product-Driven Strategy
                  </h3>
                  <p className="text-muted text-sm">
                    We take an outcome-focused approach to building products
                    aligned with user needs, market demand, and long-term goals.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 p-6 max-w-md bg-card border border-border hover:bg-card/80 hover:rounded-2xl hover:shadow-xl hover:shadow-primary/5 hover:border hover:border-primary/20"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Scalable Software Engineering
                  </h3>
                  <p className="text-muted text-sm">
                    We architect and build high-performance, scalable systems
                    designed for reliability, security, and sustainable growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-1 relative flex lg:hidden 2xl:flex"
          >
            <div className="relative z-10">
              <img
                src="/images/hero-image.jpg"
                alt="Technology Illustration"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>

        {/* For small and medium desktop */}
        <div className="hidden lg:flex 2xl:hidden justify-evenly mt-10 xl:mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4 p-6 max-w-md bg-card border border-border hover:bg-card/80 hover:rounded-2xl hover:shadow-xl hover:shadow-primary/5 hover:border hover:border-primary/20"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">
                Product-Driven Strategy
              </h3>
              <p className="text-muted text-sm">
                We take an outcome-focused approach to building products aligned
                with user needs, market demand, and long-term goals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-4 p-6 max-w-md bg-card border border-border hover:bg-card/80 hover:rounded-2xl hover:shadow-xl hover:shadow-primary/5 hover:border hover:border-primary/20"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">
                Scalable Software Engineering
              </h3>
              <p className="text-muted text-sm">
                We architect and build high-performance, scalable systems
                designed for reliability, security, and sustainable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
