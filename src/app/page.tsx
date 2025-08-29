// src/app/page.tsx
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import UGCExplainer from "@/components/UGCExplainer";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SuccessStats from "@/components/SuccessStats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Lazy-load lower sections to keep the first view snappy.
// (SEO still fine if you keep ssr: true; remove { ssr:false } unless you really need less JS.)
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <UGCExplainer />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
