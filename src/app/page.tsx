import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { MidCta } from "@/components/sections/mid-cta";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Faq } from "@/components/sections/faq";
import { BottomCta } from "@/components/sections/bottom-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <MidCta />
        <HowItWorks />
        <Faq />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
}
