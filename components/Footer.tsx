import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-12 relative">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <Link
            href="https://github.com/Joao208/k8s-simulator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-foreground/50 hover:text-foreground transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joao208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-foreground/50 hover:text-foreground transition-colors" />
          </Link>
        </div>
        <div className="relative h-32 w-full overflow-hidden">
          <div
            className="absolute w-full text-center text-[12rem] font-bold leading-none"
            style={{ bottom: "-45%" }}
          >
            <span className="bg-gradient-to-t from-transparent via-foreground/5 to-foreground/15 bg-clip-text text-transparent">
              K8s Learn
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
