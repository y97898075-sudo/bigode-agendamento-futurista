import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Barbers from "@/components/Barbers";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useBookingModal } from "@/hooks/useBookingModal";

const Index = () => {
  const { isOpen, close } = useBookingModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Barbers />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BookingModal isOpen={isOpen} onClose={close} />
    </div>
  );
};

export default Index;
