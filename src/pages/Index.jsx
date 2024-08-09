import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-blue-200">
      <Header scrollY={scrollY} />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

const Header = ({ scrollY }) => (
  <motion.header
    className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center"
    style={{
      backgroundColor: `rgba(255, 182, 193, ${Math.min(scrollY / 500, 0.9)})`,
    }}
  >
    <motion.h1
      className="text-2xl font-bold text-purple-800"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Anton Osika
    </motion.h1>
    <nav>
      <motion.ul
        className="flex space-x-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li><a href="#projects" className="text-purple-800 hover:text-purple-600">Projects</a></li>
        <li><a href="#about" className="text-purple-800 hover:text-purple-600">About</a></li>
        <li><a href="#contact" className="text-purple-800 hover:text-purple-600">Contact</a></li>
      </motion.ul>
    </nav>
  </motion.header>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <motion.div
      className="text-center z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl font-bold text-purple-800 mb-4">Building AGI in Europe</h1>
      <p className="text-2xl text-purple-600 mb-8">Prev. CERN, Sana Labs, YC (2x top company)</p>
      <div className="flex justify-center space-x-4">
        <SocialLink href="https://github.com/AntonOsika" icon={<Github />} />
        <SocialLink href="https://twitter.com/antonosika" icon={<Twitter />} />
        <SocialLink href="https://www.linkedin.com/in/antonosika/" icon={<Linkedin />} />
      </div>
    </motion.div>
    <FloatingShapes />
  </section>
);

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-800 hover:text-purple-600"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

const FloatingShapes = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          width: Math.random() * 50 + 20,
          height: Math.random() * 50 + 20,
          borderRadius: '50%',
          background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: Math.random() * 400 - 200,
          y: Math.random() * 400 - 200,
          rotate: Math.random() * 360,
        }}
        transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    ))}
  </>
);

const Projects = () => (
  <section id="projects" className="min-h-screen py-20 bg-yellow-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Notable Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="GPT Engineer"
          description="One prompt generates a codebase. Asks clarifying questions, generates technical specs, and writes all necessary code."
          link="https://github.com/AntonOsika/gpt-engineer"
        />
        <ProjectCard
          title="GPT Engineer App"
          description="A platform that allows anyone to build and deploy web apps using plain English, reducing barriers to build."
          link="https://gptengineer.app/"
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-2xl font-bold text-purple-800 mb-4">{title}</h3>
    <p className="text-purple-600 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
    >
      Learn More
    </a>
  </motion.div>
);

const About = () => (
  <section id="about" className="min-h-screen py-20 bg-green-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">About Me</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-xl text-purple-600 mb-6">
          I'm passionate about building AGI (Artificial General Intelligence) in Europe. With a background in prestigious institutions and successful startups, I'm dedicated to pushing the boundaries of AI and making it accessible to everyone.
        </p>
        <p className="text-xl text-purple-600 mb-6">
          My journey includes work at CERN, Sana Labs, and founding two top YC companies. Now, I'm focused on projects like GPT Engineer, which aims to revolutionize how we build software.
        </p>
        <p className="text-xl text-purple-600">
          I believe in reducing barriers to build and empowering people to create amazing things with technology.
        </p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="min-h-screen py-20 bg-blue-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <p className="text-xl text-purple-600 mb-8 text-center">
          Interested in collaborating or just want to say hi? Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <SocialLink href="https://github.com/AntonOsika" icon={<Github size={32} />} />
          <SocialLink href="https://twitter.com/antonosika" icon={<Twitter size={32} />} />
          <SocialLink href="https://www.linkedin.com/in/antonosika/" icon={<Linkedin size={32} />} />
        </div>
      </div>
    </div>
  </section>
);

export default Index;
