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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Skill />
            <Project />
          </>} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<AllProject />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
