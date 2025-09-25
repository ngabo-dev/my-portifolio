import { motion } from 'motion/react';
import { GraduationCap, Award, TrendingUp, BookOpen } from 'lucide-react';

export function Education() {
  const certifications = [
    {
      title: "Certificate of Competence in Software Development",
      issuer: "IDA Technology (Rwanda TVET Board)",
      date: "July 2023",
      type: "Technical Certification"
    },
    {
      title: "Kubernetes Certification", 
      issuer: "Linux Foundation",
      date: "2024",
      type: "Industry Certification"
    },
    {
      title: "Stanford Code in Place",
      issuer: "Stanford University",
      date: "April-June 2025",
      type: "Academic Program"
    },
    {
      title: "Getting Started with R",
      issuer: "Coursera",
      date: "January 2025",
      type: "Online Course"
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Coursera", 
      date: "April 2025",
      type: "Online Course"
    },
    {
      title: "Flutter and Dart Development",
      issuer: "Coursera",
      date: "March 2025", 
      type: "Online Course"
    }
  ];

  const academicCourses = [
    { course: "Introduction to Linux and IT Tools", grade: "98.46%" },
    { course: "Introduction to Python Programming and Databases", grade: "99.18%" },
    { course: "Web Infrastructure", grade: "77.32%" },
    { course: "Mobile Application Development", grade: "78.77%" },
    { course: "Mathematics for Machine Learning", grade: "85.37%" }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation with continuous learning and professional certifications 
            demonstrating commitment to technical excellence.
          </p>
        </motion.div>

        {/* Current Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-primary/5 rounded-lg p-8 mb-12"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-primary" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl mb-2">BSc (Hons) Software Engineering</h3>
              <p className="text-primary mb-2">African Leadership University</p>
              <p className="text-muted-foreground mb-4">2023-2026 | Currently in 2nd Year</p>
              <div className="bg-card rounded-lg p-4 inline-block">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-primary" size={20} />
                  <span className="text-lg">Current CGPA: 4.09/5.00</span>
                  <span className="text-sm text-muted-foreground">(Excellent Performance - 80-99.99% range)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Performance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-card rounded-lg p-8 mb-12 shadow-lg"
        >
          <h3 className="text-2xl mb-6 flex items-center gap-3">
            <BookOpen className="text-primary" size={24} />
            Notable Academic Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {academicCourses.map((course, index) => (
              <div key={course.course} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="text-sm">{course.course}</span>
                <span className="text-primary">{course.grade}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Previous Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h3 className="text-xl mb-4">Technical Education</h3>
            <div className="space-y-3">
              <div>
                <p className="text-primary">Technical and Vocational Training in Software Development</p>
                <p className="text-muted-foreground">IDA Technology | 2022</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h3 className="text-xl mb-4">Career Transition</h3>
            <div className="space-y-3">
              <div>
                <p className="text-primary">High School Background</p>
                <p className="text-muted-foreground">Welding and Fabrication → Software Engineering</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Successfully transitioned from welding to IT, demonstrating exceptional adaptability
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-2xl mb-8 flex items-center gap-3">
            <Award className="text-primary" size={24} />
            Professional Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    {cert.type}
                  </span>
                </div>
                <h4 className="text-lg mb-2">{cert.title}</h4>
                <p className="text-primary mb-1">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}