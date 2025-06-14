import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white px-6 sm:px-10 lg:px-20 flex items-center justify-center animate-fade-up"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Profile Image */}
        <div className="relative group flex-shrink-0">
          <div className="relative rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-xl">
            <img
              src={profileImg}
              alt="Preetam Kulkarni"
              className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-900 shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-primary opacity-10 blur-2xl group-hover:opacity-20 transition duration-300" />
        </div>
 {/* About Text */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow">
            About Me
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6">
            Hi, I'm <span className="text-white font-semibold">Preetam Kulkarni</span> — a
            <span className="text-cyan-400 font-semibold"> B.E CSE student</span> passionate about
            <span className="text-teal-400 font-semibold"> frontend development</span> and{" "}
            <span className="text-purple-400 font-semibold">AI/ML</span>. I enjoy crafting responsive, elegant websites and exploring futuristic tech daily.
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            With a growth mindset and a love for learning, I’m always building and breaking things.
            I've also had hands-on experience building ML models for deepfake detection and voice-based character animation. Whether it's designing clean UI/UX or experimenting with AI, I love bringing ideas to life. 🚀
          </p>
{/* 🔧 Technical Skills */}
<div className="mb-8">
  <h3 className="text-M font-semibold text-white mb-2 underline underline-offset-4 decoration-primary">
    Technical Skills
  </h3>
  <p className="text-sm sm:text-base text-gray-300 tracking-wide">
    react  <span className="mx-1">|</span> Python <span className="mx-1">|</span> ML <span className="mx-1">|</span> Tensorflow <span className="mx-1">|</span> Mongodb <span className="mx-1">|</span> Javascript <span className="mx-1">|</span> Tailwindcss <span className="mx-1">|</span> Responsive Design
  </p>
</div>

          {/* Resume Button */}
          <a
            href="https://docs.google.com/document/d/1jswsuC21hH_yMF-ZPNwCHOQOAHcDeY0f/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50"
          >
            📄 View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
