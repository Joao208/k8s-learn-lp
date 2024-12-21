"use client";

import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <section id="terminal" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience Real Kubernetes
        </motion.h2>
        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl bg-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            className="w-full h-auto rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/terminal-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
