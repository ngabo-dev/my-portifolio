import { motion } from 'motion/react';
import { ArrowDown, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwd29ya3NwYWNlJTIwY29kaW5nfGVufDF8fHx8MTc1ODcwMzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional tech workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl mb-6 text-primary"
          >
            Jean Pierre NIYONGABO
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-4 text-foreground"
          >
            Machine Learning Engineer | IT Professional | Full-Stack Developer
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto"
          >
            Transforming complex technical challenges into innovative digital solutions. I engineer robust systems, automate processes, and build scalable infrastructures that drive business growth and operational excellence.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>Kigali, Rwanda</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <span>j.niyongabo@alustudent.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              <span>+250787007387</span>
            </div>

          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-4 mb-12 text-sm"
          >
            <span className="bg-primary/10 px-3 py-1 rounded-full">Kinyarwanda (Native)</span>
            <span className="bg-primary/10 px-3 py-1 rounded-full">English (Fluent)</span>
            <span className="bg-primary/10 px-3 py-1 rounded-full">French (Beginner)</span>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Learn More</span>
            <ArrowDown size={20} className="animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}