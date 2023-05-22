import react,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerAppBar from './component/navbar/MenuBar';
import Home from './component/home/Home';
import About from './component/about/About';
import Fotter from "./component/footer/Footer";
import Skill from "./component/skill/Skill";
import Project from "./component/project/Project";
import AllProject from "./component/project/AllProject";
import Contact from "./component/contact/Contact";
import ScrollToTop from "./component/ScrollTop";
import Faq from "./component/faqs/Faq";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from './component/resume/Resume';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Skill />
            <Project id="third-component" />
            <Faq />
          </>} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<AllProject />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
