import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { MexicoCityDeformation } from "./components/sections/Individual Projects/MexicoCityDeformation";
import { PoValleyDeformation } from "./components/sections/Individual Projects/PoValleyDeformation";
import { SocioEconomicPatternAnalysis } from "./components/sections/Individual Projects/Socio-Economic-Pattern-Analysis";
import { AllanCanopyDynamics } from "./components/sections/Individual Projects/AllanCanopyDynamics";
import { UrbanSprawlAnalysis } from "./components/sections/Individual Projects/UrbanSprawlAnalysis";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <>
    
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    <div className={`min-h-screen transition-opacity duration-700
       ${isLoaded ? "opacity-100" : "opacity-0"} 
       bg-black text-gray-100`}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <MexicoCityDeformation />
      <PoValleyDeformation />
      <SocioEconomicPatternAnalysis />
      <AllanCanopyDynamics />
      <UrbanSprawlAnalysis />

    </div>
    
  </>
  );
}

export default App;
