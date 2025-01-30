import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Code,
  Database,
  Monitor,
  FileCode2,
  Layout,
  Server,
  Github as Git,
  Terminal,
  Network,
  Cpu,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = "Currently pursuing my Bachelor's degree, with a strong foundation in MERN Stack, and Web Application Development. Passionate about building efficient and user-friendly applications, with hands-on experience in developing responsive web apps, software verification & validation, and database management. Quick learner with excellent problem-solving skills and a keen interest in emerging technologies. Seeking an opportunity to apply my skills and grow as a Software Developer in a dynamic IT environment.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const sectionClasses = "container mx-auto px-4 py-16 glass-card rounded-xl shadow-lg hover:shadow-violet-500/20 hover:border-violet-400 transition-all duration-300 mb-8 hover:glow";

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/8f3effd1f39a44558acf2609f81c593c"
    },
    {
      name: "Red Hat",
      link: "https://drive.google.com/file/d/16CukA-3lhNI5DzHCC2su2DJHQt6uyMM0/view"
    },
    {
      name: "Salesforce AI Associate",
      link: "https://drive.google.com/file/d/1lqliz2xufpa-JxoxoTF3kIKezulGmsPe/view"
    }
  ];

  return (
    <div className="min-h-screen tech-background text-white p-4">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 glass-card z-50 shadow-lg border-b border-violet-500/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">Arava Sai Krishna</h1>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden md:flex gap-6">
              {['About', 'Education', 'Skills', 'Certifications', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-violet-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-violet-500/10">
              {['About', 'Education', 'Skills', 'Certifications', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-violet-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className={`${sectionClasses} pt-32`}>
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-down text-violet-400">About Me</h2>
        <h1 className="text-5xl font-bold mb-4 animate-slide-down">Arava Sai Krishna</h1>
        <h2 className="text-2xl text-violet-400 mb-8 animate-slide-down">Software Developer</h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed animate-fade-in">
          {displayText}
        </p>
      </header>

      {/* Education */}
      <section id="education" className={sectionClasses}>
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-down">Education</h2>
        <div className="glass-card p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">KL University</h3>
          <p className="text-violet-400">Bachelor's Degree in Computer Science</p>
          <p className="text-gray-300">CGPA: 9.41</p>
          <p className="text-gray-300">Graduating: 2026</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={sectionClasses}>
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-down">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Code />, name: "Languages", skills: ["C", "Java", "HTML", "CSS", "JavaScript"] },
            { icon: <Monitor />, name: "Frontend", skills: ["React.js", "Node.js", "Figma"] },
            { icon: <Server />, name: "Backend", skills: ["Django", "Node.js"] },
            { icon: <Database />, name: "Databases", skills: ["MongoDB", "PostgreSQL", "SQL", "MySQL Workbench"] },
            { icon: <Git />, name: "Version Control", skills: ["Git", "GitHub"] },
            { icon: <FileCode2 />, name: "Tools", skills: ["VS Code", "Eclipse", "Selenium", "MySQL Workbench"] },
            { icon: <Cpu />, name: "Core CS", skills: ["Data Structures", "OOPs"] },
            { icon: <Network />, name: "Systems", skills: ["Operating Systems", "Networks & Protocols"] }
          ].map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-violet-500/20 transition-all duration-300">
              <div className="text-violet-400 mb-4">{category.icon}</div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <ul className="text-gray-300 text-sm">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className={sectionClasses}>
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-down">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-violet-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-violet-400">{cert.name}</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
              </div>
              <p className="text-gray-400 mt-2 text-sm">Click to verify</p>
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={sectionClasses}>
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-down">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a 
            href="https://online-voting-app-using-django.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-lg overflow-hidden shadow-xl hover:shadow-violet-500/20 hover:scale-105 transition-all duration-300 group"
          >
            <img 
              src="https://electionbuddy.com/wp-content/uploads/2022/01/Voting-image-6-scaled.jpg" 
              alt="Online Voting System"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Online Voting System</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
              </div>
              <p className="text-gray-300">A secure and efficient online voting platform</p>
            </div>
          </a>
          <a 
            href="https://project-blogging-8qkmpbu8r-arava-sai-krishnas-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-lg overflow-hidden shadow-xl hover:shadow-violet-500/20 hover:scale-105 transition-all duration-300 group"
          >
            <img 
              src="https://blog.upskillist.com/wp-content/uploads/2022/01/New-Project-61.png" 
              alt="Online Blogging System"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Online Blogging System</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
              </div>
              <p className="text-gray-300">A feature-rich blogging platform</p>
            </div>
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={sectionClasses}>
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-down">Experience</h2>
        <div className="glass-card p-6 rounded-lg shadow-xl hover:shadow-violet-500/20 hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Junior Web Developer</h3>
          <p className="text-violet-400 mb-2">VSTechWorld5 | October, 2024 – Present</p>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>Developing an online exam proctoring system using the MERN stack (MongoDB, Express.js, React.js, Node.js) to ensure secure and efficient exam monitoring.</li>
            <li>Implementing real-time proctoring features, including video and audio recording, to enhance exam integrity and prevent malpractice.</li>
            <li>Designing a scalable backend with Node.js and MongoDB, ensuring efficient data management and seamless user authentication for students and administrators.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={sectionClasses}>
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-down">Contact</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="tel:8074999460" className="flex items-center gap-2 text-gray-300 hover:text-violet-400 transition-colors">
            <Phone /> 8074999460
          </a>
          <a href="mailto:saikrishnaarava27@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-violet-400 transition-colors">
            <Mail /> saikrishnaarava27@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/arava-sai-krishna-4ab20b28b/" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 text-gray-300 hover:text-violet-400 transition-colors">
            <Linkedin /> LinkedIn
          </a>
          <a href="https://github.com/AravaSaiKrishna1911" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-gray-300 hover:text-violet-400 transition-colors">
            <Github /> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;