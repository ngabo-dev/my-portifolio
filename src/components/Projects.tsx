import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Server, Code, Database, Network, Shield, Cloud } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Flower Classification System",
      category: "Machine Learning & AI",
      icon: Database,
      image: "/images/flower.png",
      description: "Advanced machine learning model for automated flower species classification using computer vision and deep learning techniques.",
      features: [
        "Deep learning model for image classification",
        "Real-time species identification",
        "High accuracy botanical classification",
        "User-friendly web interface",
        "Comprehensive flower species database"
      ],
      technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
      impact: "Automated botanical identification for research and education",
      demoLink: "https://www.youtube.com/watch?v=E4B0uK4fOJ4",
      githubLink: ""
    },
    {
      title: "Igitego Hotel Management System",
      category: "Hospitality & Enterprise Software",
      icon: Code,
      image: "/images/igitego.png",
      description: "Comprehensive hotel management platform with booking system, guest management, and administrative dashboard for Igitego Hotel.",
      features: [
        "Online room booking and reservation system",
        "Guest check-in/check-out management",
        "Real-time room availability tracking",
        "Billing and payment processing",
        "Administrative dashboard and reporting"
      ],
      technologies: ["Full-stack Development", "Database Design", "Payment Integration", "Responsive Design"],
      impact: "Streamlined hotel operations and enhanced guest booking experience",
      demoLink: "https://apart.igitegohotel.com/",
      githubLink: ""
    },
    {
      title: "Ishyiga Local E-commerce Platform",
      category: "E-commerce & Web Development",
      icon: Server,
      image: "/images/ishyiga.png",
      description: "Local e-commerce marketplace connecting buyers and sellers in Rwanda with secure transactions and delivery management.",
      features: [
        "Multi-vendor marketplace functionality",
        "Secure payment processing",
        "Order tracking and delivery management",
        "User authentication and profiles",
        "Product catalog and search functionality"
      ],
      technologies: ["E-commerce Development", "Payment Gateway", "User Management", "Mobile Responsive"],
      impact: "Supporting local businesses and facilitating online commerce in Rwanda",
      demoLink: "https://ihute.rw/",
      githubLink: ""
    },
    {
      title: "Ka-Eco Environmental Platform",
      category: "Environmental & Sustainability",
      icon: Cloud,
      image: "/images/ka-eco.png",
      description: "Environmental awareness and sustainability platform promoting eco-friendly practices and environmental conservation initiatives.",
      features: [
        "Environmental impact tracking",
        "Sustainability resources and tips",
        "Community engagement features",
        "Environmental data visualization",
        "Educational content management"
      ],
      technologies: ["React", "Environmental Data", "Web Development", "Responsive Design"],
      impact: "Promoting environmental awareness and sustainable practices in the community",
      demoLink: "https://ka-eco.netlify.app/",
      githubLink: ""
    }
  ];

  const categories = ["All", "Machine Learning & AI", "Hospitality & Enterprise Software", "E-commerce & Web Development", "Environmental & Sustainability"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">Project Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of 4 innovative projects spanning machine learning, hospitality management, 
            e-commerce, and environmental sustainability solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                    <project.icon className="text-primary-foreground" size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{project.category}</div>
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground italic mb-4">
                  {project.impact}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md text-xs hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-card border border-border text-card-foreground rounded-md text-xs hover:bg-muted transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}