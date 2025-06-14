import Hero from './components/Hero';
import About from './components/about';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="overflow-auto">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
