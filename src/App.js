import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>  
          </Route>      
        </Routes>
      </BrowserRouter>
    </div>
    </AnimatePresence>
  );
}

export default App;
