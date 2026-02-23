import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsList from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./index.css";

function App() {
  return (
    <div className="bg-[#0a0a1a] min-h-screen text-gray-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsList />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
