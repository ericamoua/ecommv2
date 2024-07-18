import { render } from "@testing-library/react";
import { useEffect } from "react";
import "../Styles/Nav.css";
const Nav = () => {
    const handleSideNavClick = () => {
        // Change display for icon and side navigation
    };

    return (
        <div>
            <div>
                <nav class="navbar">
                    <div class="header-top">
                        <img src="../images/hnubbloomsplant.png" alt="HNUB BLOOMS" class="nav-icon"></img>
                    </div>
                {/* <div class="nav-toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div> */}
                    <div>
                    <ul class="header-bottom">
                        <li class="nav-item">
                            <a href="#" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Plants</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>

            <button onClick={handleSideNavClick}>
                Click me
            </button>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/">Home</a></li>
                <li><a href="plants">Plants</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Nav;

