import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignalTicker from "@/components/SignalTicker";
import About from "@/components/About";
import Features from "@/components/Features";
import JourneyMode from "@/components/JourneyMode";
import TrustedContacts from "@/components/TrustedContacts";
import EmergencyWorkflow from "@/components/EmergencyWorkflow";
import Privacy from "@/components/Privacy";
import OfflineSupport from "@/components/OfflineSupport";
import Screenshots from "@/components/Screenshots";
import TechnicalHighlights from "@/components/TechnicalHighlights";
import FAQ from "@/components/FAQ";
import GithubDownloads from "@/components/GithubDownloads";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SignalTicker />
      <About />
      <Features />
      <JourneyMode />
      <TrustedContacts />
      <EmergencyWorkflow />
      <Privacy />
      <OfflineSupport />
      <Screenshots />
      <TechnicalHighlights />
      <FAQ />
      <GithubDownloads />
      <Footer />
    </main>
  );
}
