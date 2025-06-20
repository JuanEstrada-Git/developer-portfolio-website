import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import ProfessionalProfile from './components/ProfessionalProfile'
import './index.css'; // This keeps your styles loaded!


function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <ProfessionalProfile />
            <Projects />
            <Carousel />
            <Contact />
        </>
    );
}
export default App;

