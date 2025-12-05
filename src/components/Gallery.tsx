import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop",
    category: "Degradê",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop",
    category: "Barba",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop",
    category: "Clássico",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop",
    category: "Moderno",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop",
    category: "Degradê",
  },
  {
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop",
    category: "Barba",
  },
];

const categories = ["Todos", "Degradê", "Barba", "Clássico", "Moderno"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredImages =
    activeCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="galeria" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Galeria de <span className="text-primary text-glow">Estilos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Inspire-se com nossos trabalhos e encontre o estilo perfeito para você.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "gradient-primary text-primary-foreground box-glow"
                  : "glass text-muted-foreground hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="group relative aspect-square overflow-hidden rounded-2xl neon-border cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              layout
            >
              <img
                src={image.src}
                alt={image.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-medium">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
