"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Master Kubernetes in Your Browser
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Create, manage, and explore Kubernetes clusters without installing
          anything.
        </motion.p>

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

        <motion.a
          href="https://k8s-learn.joaobarros.dev/"
          className="bg-primary text-background text-base px-8 py-2.5 rounded-full hover:bg-primary/90 transition-colors mt-8 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Start Learning Now
        </motion.a>
      </div>
    </section>
  );
}
