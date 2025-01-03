import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main className="relative">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
