import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/Hero.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-background text-foreground px-4" style={{ backgroundImage: `url(${HeroImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <section className="w-full max-w-5xl text-center">
          <div className="mx-auto py-20 px-6 md:px-12 animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Welcome to{" "}
              <span className="text-blue-600 dark:text-blue-400">PDFQuery</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Effortlessly extract, analyze, and manage data from PDFs — all in one streamlined interface.
            </p>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <p>
                <strong className="text-foreground dark:text-white">PDFQuery</strong> gives you the power to work with PDFs like never before. From structured text to images and tables, it extracts it all seamlessly.
              </p>
              <p>
                Built with performance and usability in mind, it’s the perfect tool for developers, analysts, and teams working with unstructured documents.
              </p>
            </div>

            <div className="mt-10">
            <Link href="/register">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 cursor-pointer">
                Get Started
              </Button>
            </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
