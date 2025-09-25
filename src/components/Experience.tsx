import { motion } from 'motion/react';
import { Briefcase, Users, Code, Database, Headphones, Monitor } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "African Leadership University",
      duration: "Current",
      type: "Full-time",
      location: "Kigali, Rwanda",
      icon: Code,
      responsibilities: [
        "Developing enterprise-level software solutions",
        "Leading full-stack development projects",
        "Database design and optimization",
        "System architecture and technical leadership",
        "Mentoring junior developers and students"
      ],
      technologies: ["Python", "JavaScript", "React", "Node.js", "Database Administration"],
      impact: "Contributing to educational technology initiatives and student success platforms"
    },
    {
      title: "Software Engineer",
      company: "Algorithm Inc (formerly Ishyiga Software)",
      duration: "2023-2024",
      type: "Contract",
      location: "Kigali, Rwanda", 
      icon: Briefcase,
      responsibilities: [
        "Developed enterprise business management software solutions",
        "Built comprehensive stock management systems with real-time tracking",
        "Implemented sales and purchase management modules",
        "Created inventory management dashboards with analytics",
        "Provided comprehensive technical support and client services"
      ],
      technologies: ["Full-stack Development", "Database Design", "Business Analytics"],
      impact: "Streamlined business operations for multiple clients with comprehensive support solutions"
    },
    {
      title: "Software Engineering Intern",
      company: "IFG (Informed Future Generations)",
      duration: "June 2024 - December 2024",
      type: "Remote Internship",
      location: "Remote",
      icon: Database,
      responsibilities: [
        "Led backend infrastructure development using Node.js and MySQL",
        "Collaborated in 4-person development team using Agile methodologies",
        "Optimized database queries resulting in improved API performance", 
        "Contributed to nonprofit organization's digital transformation",
        "Implemented RESTful APIs and database management systems"
      ],
      technologies: ["Node.js", "MySQL", "Git", "Postman", "Agile/Scrum"],
      impact: "Enhanced API performance and contributed to nonprofit digital transformation"
    },
    {
      title: "Skills Development Intern",
      company: "IDA Technology",
      duration: "July 2022 - November 2022",
      type: "Internship",
      location: "Kigali, Rwanda",
      icon: Users,
      responsibilities: [
        "Completed comprehensive software development training program",
        "Acquired proficiency in Microsoft Office suite and business applications",
        "Developed foundational programming skills in multiple languages",
        "Participated in hands-on coding projects and technical workshops",
        "Built portfolio projects demonstrating technical competencies"
      ],
      technologies: ["Programming Fundamentals", "Microsoft Office", "Project Development"],
      impact: "Foundation training that led to current software engineering expertise"
    }
  ];

  const supportServices = [
    {
      icon: Monitor,
      title: "Remote Technical Support",
      description: "Providing comprehensive user support via AnyDesk for system diagnostics and troubleshooting"
    },
    {
      icon: Users,
      title: "On-site Client Assistance", 
      description: "Conducting field visits for complex installations, training, and system configuration"
    },
    {
      icon: Headphones,
      title: "User Training & Documentation",
      description: "Guiding clients through software navigation, feature utilization, and best practices"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Progressive career growth from intern to software engineer with comprehensive experience 
            in enterprise software development and client support services.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title + experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <experience.icon className="text-primary" size={32} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-1">{experience.title}</h3>
                      <p className="text-primary text-lg">{experience.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-primary/10 px-3 py-1 rounded-full text-sm inline-block mb-1">
                        {experience.type}
                      </div>
                      <p className="text-muted-foreground text-sm">{experience.duration}</p>
                      <p className="text-muted-foreground text-sm">{experience.location}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary text-xs mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground italic">
                          <strong>Impact:</strong> {experience.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-primary/5 rounded-lg p-8"
        >
          <h3 className="text-2xl mb-8 text-center">Technical Support Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional References */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl mb-8 text-center">Professional References</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-lg text-center">
              <h4 className="text-lg mb-2">Patrick Niyogitare</h4>
              <p className="text-primary mb-1">Software Engineer</p>
              <p className="text-muted-foreground text-sm mb-2">QT Global Software</p>
              <p className="text-xs text-muted-foreground">Career Mentor</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg text-center">
              <h4 className="text-lg mb-2">Marvin Ogore</h4>
              <p className="text-primary mb-1">Software Engineer (ML)</p>
              <p className="text-muted-foreground text-sm mb-2">African Leadership University</p>
              <p className="text-xs text-muted-foreground">Academic Mentor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}