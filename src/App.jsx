import './App.css';
import Navbar from "./components/Navbar/navbar.jsx";
import HomePage from "./components/HomePage/HomePageComponent.jsx";
import About from "./components/AboutMe/About.jsx";
import Projects from "./components/projects/projects.jsx";

function App() {
    return (
        <div>
            <div className="container">
                <Navbar />
                <section id="home">
                    <HomePage />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
            </div>
        </div>
    );
}

export default App;