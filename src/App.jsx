import About from "./components/About";
import Contact from "./components/Contact";
import ServicesComponent from "./components/Experience";

import HomePage from "./components/HomePage";
import Features from "./components/Features";
import ConsultationForm from "./components/ConsultationForm"


function App() {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white"></div>
      </div>
      <div className="container mx-auto px-8">
        <HomePage/>
        
        
        <About/>
        <ServicesComponent/>
        <Features/>
        <ConsultationForm/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
