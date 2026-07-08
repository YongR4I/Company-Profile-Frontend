import ContactHero from "@/components/sections/contact/hero";
import ContactForm from "@/components/sections/contact/contactform";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
