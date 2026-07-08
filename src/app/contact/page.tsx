import HeroHeader from "@/components/shared/HeroHeader";
import ContactForm from "@/components/sections/contact/ContactForm";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            Contact <span className="text-water-300">Us</span>
          </>
        }
        subtitle="Let's Connect"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
