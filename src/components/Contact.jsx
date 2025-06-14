import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 sm:px-10 lg:px-20 py-24 flex flex-col justify-center items-center text-center animate-fade-in"
    >
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 drop-shadow-xl mb-8">
          🚀 Let's Connect!
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-12">
          Have a project in mind or want to explore opportunities? I'm always open to exciting conversations. Let’s build something great together!
        </p>

        {/* Contact Button */}
        <a
          href="mailto:kulkarnipreetam0@gmail.com"
          className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-teal-400/50"
        >
          ✉️ Contact Me
        </a>

        {/* Footer Social Links */}
        <div className="mt-16 flex justify-center items-center gap-8 text-3xl">
          <a
            href="https://github.com/hacknotch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-teal-300 transition duration-300 hover:scale-110"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/preetam-kulkarni-7748072a8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-teal-300 transition duration-300 hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/preetam_2005_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-teal-300 transition duration-300 hover:scale-110"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
