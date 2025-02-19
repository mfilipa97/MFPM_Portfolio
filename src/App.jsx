import './App.css';
import './index.css'
import Navbar from "./navbar.jsx";
import HomePage from "./HomePageComponent.jsx";
import Dynamic from "./dynamic_grid_animation.jsx";
import Projects from "./Projects.jsx";
import Stacks from "./Stacks.jsx";


function App() {
    return (
        <>
            <div>
                <div className="container">

                <Navbar/>
                <HomePage/>
                    <Stacks/>

                    <Projects/>





            </div>

            </div>
        </>
    );
}

export default App;