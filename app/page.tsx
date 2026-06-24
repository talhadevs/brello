import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import Pricing from "@/app/components/Pricing";
import ProcessSteps from "@/app/components/ProcessSteps";
import VideoTestimonials from "@/app/components/VideoTestimonials";
import SupportSection from "@/app/components/SupportSection";
import MemberReviews from "@/app/components/MemberReviews";
import WhatsTheCatch from "@/app/components/WhatsTheCatch";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="flex w-full flex-col">
        <Hero />
        <TrustBar />
        <Pricing />
        <ProcessSteps />
        <VideoTestimonials />
        <SupportSection />
        <MemberReviews />
        <WhatsTheCatch />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
