import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/useBookingModal";
import { BUSINESS_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const businessHours = [
  { day: "Segunda a Sexta", hours: "09:00 - 20:00" },
  { day: "Sábado", hours: "09:00 - 18:00" },
  { day: "Domingo", hours: "Fechado" },
];

const Contact = () => {
  const { open: openBooking } = useBookingModal();

  const handleMapClick = () => {
    window.open(BUSINESS_INFO.googleMapsUrl, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${BUSINESS_INFO.phone}`;
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(WHATSAPP_MESSAGES.booking), "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Venha Nos <span className="text-primary text-glow">Visitar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar seu visual. Entre em contato ou 
            visite nossa barbearia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Location Card */}
            <div className="gradient-card rounded-2xl p-6 neon-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">Localização</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {BUSINESS_INFO.addressShort}
                  </p>
                  <Button variant="link" className="px-0 mt-2" onClick={handleMapClick}>
                    Ver no mapa →
                  </Button>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="gradient-card rounded-2xl p-6 neon-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">Telefone</h3>
                  <p className="text-muted-foreground">{BUSINESS_INFO.phoneFormatted}</p>
                  <Button variant="link" className="px-0 mt-2" onClick={handlePhoneClick}>
                    Ligar agora →
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="gradient-card rounded-2xl p-6 neon-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    {businessHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className={item.hours === "Fechado" ? "text-destructive" : "text-primary font-medium"}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:box-glow transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:box-glow transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:box-glow transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Map / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gradient-card rounded-2xl p-8 neon-border h-full flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mb-6 animate-glow-pulse">
                <MapPin className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Pronto para um Novo Visual?
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-sm">
                Agende seu horário agora mesmo e venha conhecer a barbearia mais 
                moderna da cidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
                <Button variant="hero" size="lg" className="w-full" onClick={openBooking}>
                  Agendar Agora
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={handleWhatsAppClick}>
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
