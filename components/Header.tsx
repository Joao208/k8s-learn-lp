"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/[0.1]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <nav className="w-full px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
          <Link href="/" className="text-2xl font-bold text-gradient">
            K8s Learn
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="#terminal"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Terminal
            </Link>
            <Link
              href="https://k8s-learn.joaobarros.dev/"
              className="bg-primary/10 text-primary px-6 py-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
