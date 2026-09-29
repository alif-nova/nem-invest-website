import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Reliable & Scalable Solutions",
    description:
      "We design secure, high-performance software that scales effortlessly as your business grows.",
    color: "bg-primary text-black",
  },
  {
    id: 2,
    title: "Skilled & Dedicated Team",
    description:
      "Our developers, designers, and project managers deliver each project with expertise, creativity, and commitment.",
    color: "bg-primary text-black",
  },
  {
    id: 3,
    title: "Agile Development Excellence",
    description:
      "We leverage agile methods to deliver adaptable solutions quickly, incorporating feedback to drive measurable results.",
    color: "bg-primary text-black",
  },
];

export default function Features() {
  return (
    <section id="about" className="bg-surface py-20 pt-15 lg:py-25">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold text-sm uppercase tracking-widest"
          >
            - Why NEM INVEST
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-white mt-4 mb-6 tracking-tight"
          >
            Building Technology with Purpose
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted max-w-3xl mx-auto text-lg"
          >
            We turn ideas into high-quality, scalable products that drive
            growth, create value, and deliver lasting impact.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center font-black text-xl shadow-xl group-hover:scale-110 transition-transform`}
                >
                  {feature.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 relative mt-6 lg:mt-0"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img
                src="/images/about-us-image.jpg"
                alt="Software Development"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Organic shape background */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] -z-10 -rotate-3"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
