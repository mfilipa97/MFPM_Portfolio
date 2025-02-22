import React from 'react';
import './homepage_layout.css';
import Card from "../Card/Card.jsx";
import Tooltip from "../ToolTip.jsx";
import AutoTyping from "../AutoTyping.jsx";

function HomePage() {
    return (

    <div className="homepage">

        <div className="Hello">
            {/* Content of the card */}
            <h1 className="hey">Hello!!</h1>
            <div className="name">
            <AutoTyping text="I  am Mariana!" fontSize="2rem"
            />
            </div>
            <div className="type-js headline">
            <div className="tooltip-container"><Tooltip/></div>
        </div>



            </div>
            <div className="card">
                <Card dataCmd="Welcome_To_My_Portfolio"/>

            </div>

        </div>
        );
        }

        export default HomePage;