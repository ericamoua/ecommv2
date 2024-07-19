import { render } from "@testing-library/react";
import { useEffect } from "react";
import "../Styles/Nav.css";
const Nav = () => {
    return (
        <div>
            <div>
                <nav class="navbar">
                    <div class="header-top">
                        <img src="../images/hnubbloomsplant.png" alt="HNUB BLOOMS" class="nav-icon"></img>
                    </div>
                    <div>
                    <ul class="header-bottom">
                        <li class="nav-item">
                            <a href="/" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="plants" class="nav-link">Plants</a>
                        </li>
                        <li class="nav-item">
                            <a href="contact" class="nav-link">Contact</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;

