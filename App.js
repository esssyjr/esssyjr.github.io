import React, { useState, useEffect } from 'react';
import { Camera, Mail, Linkedin } from 'lucide-react';

const Project = ({ title, description, youtubeLink, githubLink }) => (
  <div className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <div className="space-x-4">
      <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">YouTube</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>
    </div>
  </div>
);

const Article = ({ title, description, mediumLink }) => (
  <div className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <a href={mediumLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Read on Medium</a>
  </div>
);

const Skill = ({ name, level }) => (
  <div className="bg-gray-800 rounded-lg p-4">
    <h4 className="font-bold mb-2">{name}</h4>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className={`bg-gray-800 fixed w-full top-0 z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="#home" className="font-bold hover:text-cyan-400 transition-colors">Home</a></li>
            <li><a href="#about" className="font-bold hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#skills" className="font-bold hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="font-bold hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#articles" className="font-bold hover:text-cyan-400 transition-colors">Articles</a></li>
            <li><a href="#contact" className="font-bold hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-24">
        <section id="home" className="py-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Camera size={48} className="mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Your Name</h1>
            <p className="text-xl">Computer Vision Developer</p>
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <p>
              Write your bio here. Discuss your background, experience, and passion for computer vision. 
              Mention any significant achievements or projects you've worked on. This is your chance to 
              tell your story and make a connection with potential employers or collaborators.
            </p>
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skill name="Python" level={90} />
            <Skill name="OpenCV" level={85} />
            <Skill name="TensorFlow" level={80} />
            <Skill name="PyTorch" level={75} />
            <Skill name="Machine Learning" level={85} />
            <Skill name="Deep Learning" level={80} />
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Project
              title="Project 1"
              description="Description of Project 1"
              youtubeLink="#"
              githubLink="#"
            />
            <Project
              title="Project 2"
              description="Description of Project 2"
              youtubeLink="#"
              githubLink="#"
            />
          </div>
        </section>

        <section id="articles" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Article
              title="Article 1"
              description="Description of Article 1"
              mediumLink="#"
            />
            <Article
              title="Article 2"
              description="Description of Article 2"
              mediumLink="#"
            />
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
          <div className="flex justify-center items-center space-x-6">
            <a href="mailto:your.email@example.com" className="text-cyan-400 hover:text-cyan-300">
              <Mail size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              <Linkedin size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 text-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
