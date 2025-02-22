import './App.css';
import Navbar from "./components/Navbar/navbar.jsx";
import HomePage from "./components/HomePage/HomePageComponent.jsx";
import About from "./components/AboutMe/About.jsx";

function App() {
    return (
        <>
            <div>
                <div className="container">

                <Navbar/>
                <HomePage/>
                    <About/>
            </div>

            </div>
        </>
    );
}

export default App;