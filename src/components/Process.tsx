import { motion } from "motion/react";

const steps = [
  {
    title: "Discovery & Strategy",
    description: "Understanding your vision and setting clear objectives.",
    position: "right"
  },
  {
    title: "Design & Development",
    description: "Creating user-centric designs and developing robust solutions.",
    position: "left"
  },
  {
    title: "Testing & Quality Assurance",
    description: "Guaranteeing reliability, speed and precision with thorough quality checks.",
    position: "right"
  },
  {
    title: "Launch & Support",
    description: "Deploying your solution and providing ongoing support for continuous improvement.",
    position: "left"
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-black py-20 pt-15 lg:py-25">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10 lg:mb-16"
        >
          <span className="text-primary font-black text-sm uppercase tracking-[0.2em]">- Our Process</span>
          <h2 className="text-3xl lg:text-5xl font-black text-white mt-2 mb-4 tracking-tighter">Delivering Excellence, Every Step</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            At NEM INVEST, we transform your vision into results through a clear, structured methodology and targeted strategies that drive impact.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/10 hidden md:block"></div>

          <div className="space-y-4 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1 w-full md:w-1/2 p-4"
                >
                  <div className="bg-card p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-border hover:border-primary/30 transition-all text-left">
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-muted text-lg leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>

                {/* Dot */}
                <div className="relative flex items-center justify-center w-10 h-10 z-10 my-4 md:my-0">
                  <div className="w-5 h-5 bg-primary rounded-full ring-8 ring-primary/10"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
