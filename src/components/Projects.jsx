import project1Img from '../assets/sys.jpg';
import project2Img from '../assets/ollama.jpg';
import project3Img from '../assets/hello.png';

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white px-6 sm:px-10 lg:px-20 py-24 flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(13,255,240,0.15)_0%,_transparent_80%)] transition-all duration-300"
          style={{ '--x': '50%', '--y': '50%' }}
        ></div>
      </div>

      {/* Headline */}
      <div className="mb-16 text-center z-10">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 animate-fade-in drop-shadow-lg">
          🚀 My Featured Projects
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl animate-fade-in">
          Dive into some of my recent and most exciting work in tech.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full animate-fade-up z-10">
        {/* Card 1 */}
        <div className="bg-[#111827] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 group relative cursor-pointer">
          <img src={project1Img} alt="Instagram Clone" className="w-full h-48 object-cover" />
          <div className="p-6 relative z-10">
            <h3 className="text-2xl font-extrabold text-primary mb-2 tracking-wide">SAVEYOURSELF</h3>
            <p className="text-gray-300 mb-4 text-sm">
              A social plantation drive to stay connect for the environmental protection and plantation
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 text-teal-300 text-xs px-3 py-1 rounded-full">MERN</span>
           
            </div>
            <a
              href="https://github.com/hacknotch/deepfake-instagram-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline text-sm"
            >
              🔗 View Project
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111827] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 group relative cursor-pointer">
          <img src={project2Img} alt="AI Glasses" className="w-full h-48 object-cover" />
          <div className="p-6 relative z-10">
            <h3 className="text-2xl font-extrabold text-primary mb-2 tracking-wide">Offline AI Study Buddy</h3>
            <p className="text-gray-300 mb-4 text-sm">
             This smart study companion operates seamlessly without the need for an internet connection! 🌐❌
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 text-teal-300 text-xs px-3 py-1 rounded-full">Ollama</span>
              <span className="bg-gray-800 text-teal-300 text-xs px-3 py-1 rounded-full">python </span>
              <span className="bg-gray-800 text-teal-300 text-xs px-3 py-1 rounded-full">streamlit</span>
            </div>
            <a
              href="https://github.com/hacknotch/ollama"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline text-sm"
            >
              🔗 View Project
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111827] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 group relative cursor-pointer">
          <img src={project3Img} alt="Portfolio Website" className="w-full h-48 object-cover" />
          <div className="p-6 relative z-10">
            <h3 className="text-2xl font-extrabold text-primary mb-2 tracking-wide">deep-fake detection</h3>
            <p className="text-gray-300 mb-4 text-sm">
           focused on the rising threat of deepfake content. We proposed a solution where social media platforms can detect and label deepfake videos or images before they’re uploaded—helping reduce misinformation and protecting users online. 🛡️📲
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 text-teal-300 text-xs px-3 py-1 rounded-full">django</span>
              <span className="bg-gray-800 text-teal-300 text-xs px-3 py-1 rounded-full">Tensorflow</span>
              <span className="bg-gray-800 text-teal-300 text-xs px-3 py-1 rounded-full">Flask</span>
                     <span className="bg-gray-800 text-teal-300 text-xs px-3 py-1 rounded-full">Opencv</span>
            </div>
            <a
              href="https://github.com/hacknotch/deep_fake-detection"
              className="text-cyan-400 hover:underline text-sm"
            >
              🔗 View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
