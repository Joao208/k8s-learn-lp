import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main className="relative">
        <Hero />
        <Terminal />
      </main>
      <Footer />
    </div>
  );
}
