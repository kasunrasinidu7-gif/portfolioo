import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import CreativeWork from "./components/CreativeWork";
import About from "./components/About";
import Currently from "./components/Currently";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen text-body-md flex flex-col">
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto flex flex-col flex-1 xl:px-8">
        <Hero />
        <SelectedWork />
        <CreativeWork />
        <About />
        <Currently />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;