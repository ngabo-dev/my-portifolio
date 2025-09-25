import { motion } from 'motion/react';
import { Target, TrendingUp, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technology innovator dedicated to creating digital solutions that solve real-world problems 
            and drive business success through cutting-edge technology and innovative engineering approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl mb-4">Mission</h3>
            <p className="text-muted-foreground">
              To leverage cutting-edge technology and innovative engineering solutions to build robust, 
              secure, and scalable digital infrastructures that empower organizations to achieve their goals 
              while delivering exceptional user experiences and operational efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-primary" size={32} />
            </div>
            <h3 className="text-xl mb-4">Academic Excellence</h3>
            <p className="text-muted-foreground">
              Currently pursuing BSc (Hons) Software Engineering at African Leadership University 
              with an outstanding CGPA of 4.09/5.00, demonstrating consistent academic excellence 
              and technical proficiency across multiple domains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="text-xl mb-4">Unique Journey</h3>
            <p className="text-muted-foreground">
              Demonstrating exceptional adaptability and continuous learning in technology fields, 
              mastering advanced systems administration and infrastructure technologies with an insatiable curiosity 
              for emerging tech trends and innovative solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-card rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl mb-6 text-center">Current Focus</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg mb-4 text-primary">Professional Role</h4>
              <p className="text-muted-foreground mb-4">
                Currently serving as a Software Engineer at African Leadership University, 
                where I continue to develop my technical expertise while building a strong 
                foundation for systems administration.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack development and deployment</li>
                <li>• Database administration and optimization</li>
                <li>• Client support and system troubleshooting</li>
                <li>• Remote assistance and technical guidance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4 text-primary">Technology Expertise</h4>
              <p className="text-muted-foreground mb-4">
                Continuously advancing my expertise in modern technologies and infrastructure solutions, 
                combining deep software development knowledge with comprehensive systems administration skills.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced Linux system administration and automation</li>
                <li>• Enterprise container orchestration with Kubernetes</li>
                <li>• Cloud-native infrastructure and DevOps practices</li>
                <li>• Network security and performance optimization</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}