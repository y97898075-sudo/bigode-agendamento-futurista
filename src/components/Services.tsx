import { motion } from "framer-motion";
import { Scissors, Sparkles, Crown, Flame } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Tradicional",
    description: "Corte clássico com acabamento impecável usando técnicas tradicionais.",
    price: "R$ 45",
    duration: "30 min",
  },
  {
    icon: Crown,
    title: "Corte Premium",
    description: "Corte personalizado com lavagem, hidratação e finalização premium.",
    price: "R$ 75",
    duration: "45 min",
  },
  {
    icon: Sparkles,
    title: "Barba Completa",
    description: "Modelagem de barba com toalha quente, óleo essencial e hidratação.",
    price: "R$ 40",
    duration: "30 min",
  },
  {
    icon: Flame,
    title: "Combo VIP",
    description: "Corte + Barba + Sobrancelha + Limpeza de pele com produtos premium.",
    price: "R$ 120",
    duration: "1h 30min",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            O Melhor Para <span className="text-primary text-glow">Você</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência completa de barbearia com serviços de alta qualidade
            e profissionais especializados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group gradient-card rounded-2xl p-6 neon-border hover:box-glow transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-2xl font-bold text-primary text-glow">
                  {service.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {service.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
