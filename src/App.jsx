import Navbar from "./components/Navbar/navbar.jsx";
import About from "./components/AboutMe/About.jsx";
import Projects from "./components/projects/projects.jsx";
import HomePage from "./components/HomePage/HomePageComponent.jsx";
import './App.css';
import TechStack from "./components/Stacks/stacksCard.jsx";
import CustomCursor from "./components/customCursor/custom cursor.jsx";

function App() {
    return (
        <div>
            <div className="container">
                <Navbar/>
                <CustomCursor/>
                <section id="home">
                    <HomePage/>
                </section>
                <section id="about">
                    <About/>
                </section>
                <section id="stacks">
                    <TechStack/>
                </section>

                <section id="projects">
                    <Projects/>
                </section>
            </div>
        </div>
    );
}

export default App;