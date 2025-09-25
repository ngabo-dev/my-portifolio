import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Download } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "j.niyongabo@alustudent.com",
      href: "mailto:j.niyongabo@alustudent.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250787007387",
      href: "tel:+250787007387"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Rwanda",
      href: null
    },
    {
      icon: Globe,
      label: "Languages",
      value: "Kinyarwanda, English, French",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital infrastructure with innovative technology solutions. 
            Let's collaborate to build scalable systems that drive efficiency, security, and growth for your organization.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <contact.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Professional Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8"
              >
                <h4 className="text-lg mb-4">Professional Links</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="text-primary" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="text-primary" size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Professional Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-card rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl mb-6">Professional Summary</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg mb-2 text-primary">Current Role</h4>
                  <p className="text-muted-foreground text-sm">
                    Software Engineer at African Leadership University with strong foundations 
                    in full-stack development and systems administration.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg mb-2 text-primary">Technology Vision</h4>
                  <p className="text-muted-foreground text-sm">
                    Passionate about leveraging cutting-edge technologies to create innovative 
                    infrastructure solutions that transform business operations and user experiences.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg mb-2 text-primary">Key Strengths</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Strong programming foundation enabling automation</li>
                    <li>• Linux administration with 98.46% academic performance</li>
                    <li>• Kubernetes certification and container expertise</li>
                    <li>• Database administration and optimization</li>
                    <li>• Network configuration and security implementation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg mb-2 text-primary">Innovation Focus</h4>
                  <p className="text-muted-foreground text-sm">
                    Dedicated to exploring emerging technologies, automation solutions, 
                    and next-generation infrastructure to deliver exceptional digital experiences.
                  </p>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="w-full mt-8 bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16 bg-primary/5 rounded-lg p-8"
        >
          <h3 className="text-2xl mb-4">Ready to Innovate with Technology?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I bring a unique blend of software engineering mastery and infrastructure expertise, 
            passionate about creating digital solutions that exceed expectations and drive technological advancement.
          </p>
          <a
            href="mailto:j.niyongabo@alustudent.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail size={20} />
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}