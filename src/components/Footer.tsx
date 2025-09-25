import { motion } from 'motion/react';
import { ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onClick={scrollToTop}
            className="mb-8 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto hover:bg-primary/20 transition-colors"
          >
            <ArrowUp className="text-primary" size={20} />
          </motion.button>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl mb-4 text-primary">Jean Pierre NIYONGABO</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology enthusiast and innovative engineer passionate about creating cutting-edge 
              digital solutions that transform businesses and enhance user experiences through advanced infrastructure.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
          >
            {['About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 text-xs md:text-sm text-muted-foreground"
          >
            <span>Kigali, Rwanda</span>
            <span>•</span>
            <a href="mailto:j.niyongabo@alustudent.com" className="hover:text-primary transition-colors">
              j.niyongabo@alustudent.com
            </a>
            <span>•</span>
            <a href="mailto:ngabo470@gmail.com" className="hover:text-primary transition-colors">
              ngabo470@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+250787007387" className="hover:text-primary transition-colors">
              +250787007387
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="border-t border-border my-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          >
            <p>
              © {new Date().getFullYear()} Jean Pierre NIYONGABO. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <span>Built with</span>
              <Heart className="text-red-500" size={14} fill="currentColor" />
              <span>using React & Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Innovation Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 bg-primary/5 rounded-lg p-4"
          >
            <p className="text-sm">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Passionate about innovation and cutting-edge technology solutions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}