import { motion } from "framer-motion";
import { Instagram, Star } from "lucide-react";

const barbers = [
  {
    name: "Carlos Silva",
    role: "Master Barber",
    experience: "10 anos de experiência",
    rating: 4.9,
    specialties: ["Degradê", "Barba Completa"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    instagram: "#",
  },
  {
    name: "Rafael Santos",
    role: "Senior Barber",
    experience: "7 anos de experiência",
    rating: 4.8,
    specialties: ["Corte Moderno", "Design"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    instagram: "#",
  },
  {
    name: "André Lima",
    role: "Barber Artist",
    experience: "5 anos de experiência",
    rating: 4.9,
    specialties: ["Hair Tattoo", "Freestyle"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    instagram: "#",
  },
];

const Barbers = () => {
  return (
    <section id="barbeiros" className="py-24 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Barbeiros <span className="text-primary text-glow">Especialistas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os profissionais que vão transformar seu visual com técnica, 
            criatividade e anos de experiência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden rounded-2xl neon-border">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold">{barber.rating}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {barber.name}
                  </h3>
                  
                  <p className="text-primary font-medium text-sm mb-1">
                    {barber.role}
                  </p>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {barber.experience}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {barber.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <a
                    href={barber.instagram}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="text-sm">@{barber.name.toLowerCase().replace(" ", "")}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
