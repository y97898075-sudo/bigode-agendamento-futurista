import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/useBookingModal";
import { BUSINESS_INFO } from "@/lib/constants";
import heroBackground from "@/assets/hero-barber.jpg";

const Hero = () => {
  const { open: openBooking } = useBookingModal();

  const handleLocationClick = () => {
    window.open(BUSINESS_INFO.googleMapsUrl, "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Estilo e{" "}
            <span className="text-primary text-glow">Precisão</span>
            <br />
            em Cada Corte
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforme seu visual com os melhores barbeiros da cidade. 
            Tecnologia e tradição juntas para criar o corte perfeito para você.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button variant="hero" size="xl" className="group" onClick={openBooking}>
              <Calendar className="w-5 h-5 mr-2 group-hover:animate-float" />
              Agendar Horário
            </Button>
            <Button variant="outline" size="xl" onClick={handleLocationClick}>
              <MapPin className="w-5 h-5 mr-2" />
              Nossa Localização
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { number: "5+", label: "Anos de Experiência" },
              { number: "3000+", label: "Clientes Satisfeitos" },
              { number: "4.9", label: "Avaliação Média" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary text-glow">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
};

export default Hero;
