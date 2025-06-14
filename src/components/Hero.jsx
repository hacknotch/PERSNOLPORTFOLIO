import { useState } from 'react';

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-32 overflow-hidden bg-gray-900 text-white min-h-screen flex items-center justify-center"
    >
      {/* 🔮 Animated glow trail */}
      <div
        className="pointer-events-none absolute -inset-0 z-0 transition-all duration-75 ease-out"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(0,255,255,0.08), transparent 200px)`,
        }}
      />

      {/* 🌈 Soft blurred light blob */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          left: `${position.x - 100}px`,
          top: `${position.y - 100}px`,
          width: `200px`,
          height: `200px`,
          borderRadius: `9999px`,
          background: `rgba(0, 255, 255, 0.07)`,
          filter: `blur(60px) brightness(1.2)`,
        }}
      />

      {/* 💬 Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 max-w-4xl animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text animate-glow">
          Hi, I’m Preetam Kulkarni
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
          Frontend Developer • ML Explorer • Creative Coder
        </p>
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50"
        >
          🚀 View My Work
        </a>
      </div>
    </section>
  );
}
