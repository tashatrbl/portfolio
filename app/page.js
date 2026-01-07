'use client'
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import { Reveal } from "./components/reveal";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <div className="flex justify-center py-3">
      <Navbar/>
      <Reveal>
        <Header/>
      </Reveal>
     </div>
     <Reveal>
        <About/>
     </Reveal>  
     <Reveal>
        <Projects/>
     </Reveal>   
      <Reveal>
        <Contact/>
     </Reveal>    
    </>
  );
}
