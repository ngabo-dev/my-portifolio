import { motion } from 'motion/react';
import { Code, Server, Cloud, Database, Shield, Network } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      skills: [
        "Python", "JavaScript", "Dart", "HTML5", "CSS3", "SQL", "C", "R", "Bash",
        "React", "Next.js", "Flutter", "Django", "FastAPI", "Express.js", "Node.js",
        "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Sequelize", "Mongoose"
      ]
    },
    {
      icon: Server,
      title: "Systems & Server Administration",
      skills: [
        "Linux (Ubuntu)", "Windows Server", "systemd", "Nginx", "Apache",
        "Service Management", "User Administration", "Process Monitoring",
        "System Configuration", "Performance Optimization", "Log Analysis"
      ]
    },
    {
      icon: Database,
      title: "Database Administration",
      skills: [
        "MySQL", "PostgreSQL", "MongoDB", "Firebase", "Database Design",
        "Query Optimization", "Backup & Recovery", "Replication", "Clustering",
        "Performance Tuning", "Data Migration", "CRUD Operations"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        "Docker", "Kubernetes", "Container Orchestration", "AWS Basics",
        "Firebase", "CI/CD Pipelines", "Infrastructure as Code",
        "Container Deployment", "Scaling", "Load Balancing"
      ]
    },
    {
      icon: Network,
      title: "Networking & Hardware",
      skills: [
        "TCP/IP", "VLAN Configuration", "Router Setup", "Switch Management",
        "Network Monitoring", "Hardware Assembly", "Server Building",
        "RAID Configuration", "Cable Management", "Component Diagnostics"
      ]
    },
    {
      icon: Shield,
      title: "Security & Tools",
      skills: [
        "SSH Hardening", "Firewall Configuration", "VPN Setup", "Network Segmentation",
        "Git/GitHub", "VS Code", "Postman", "AnyDesk", "Swagger UI",
        "Remote Support", "System Diagnostics", "Troubleshooting"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise spanning software development, systems administration, 
            and infrastructure management with hands-on experience across multiple platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-primary/5 rounded-lg p-8"
        >
          <h3 className="text-2xl mb-6 text-center text-primary">Target Certifications for Systems Administration</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "CompTIA Linux+ (In Progress)",
              "AWS Academy Graduate – Cloud Foundations",
              "Red Hat System Administration I",
              "Cisco Networking Academy: Introduction to Networks"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-card p-4 rounded-lg text-center border border-primary/20"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}