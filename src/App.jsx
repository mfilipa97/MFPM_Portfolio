import Navbar from "./components/Navbar/navbar.jsx";
import About from "./components/AboutMe/About.jsx";
import Projects from "./components/projects/projects.jsx";
import HomePage from "./components/HomePage/HomePageComponent.jsx";
import './App.css';

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