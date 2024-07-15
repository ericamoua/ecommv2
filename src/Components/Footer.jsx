const Footer = () => {
    return (
        <div>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-google-plus"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="footerBottom">
                <p>&copy;HNUB BLOOMS | 2024 All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;