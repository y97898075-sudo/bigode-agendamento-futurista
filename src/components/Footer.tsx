import { Scissors, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative">
              <Scissors className="w-6 h-6 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/50 rounded-full" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Barbearia <span className="text-primary text-glow">Bigode</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#barbeiros" className="hover:text-primary transition-colors">Barbeiros</a>
            <a href="#galeria" className="hover:text-primary transition-colors">Galeria</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Barbearia Bigode. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
