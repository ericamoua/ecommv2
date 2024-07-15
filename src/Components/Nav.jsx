import { render } from "@testing-library/react";
import { useEffect } from "react";
const Nav = () => {
    const handleSideNavClick = () => {
        // Change display for icon and side navigation
    };

    return (
        <div>
            <div className="nav-wrapper green darken-4">
                <a href="index.html" className="brand-logo">
                    <img className="plant-icon" src="images/plant.png" alt="logo" />
                </a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="plants">Plants</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
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

