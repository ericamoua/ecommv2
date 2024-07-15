const Hero = () => {
    return (
        <div>
        <div className="flower-vid">
            <video muted autoPlay loop>
            <source src="flower.mp4" type="video/mp4"/>
            </video>
            <div className="flower-container">
            <h1 className="header-home">HNUB BLOOMS</h1>
            </div>
        </div>
        

            <div className="about-info">
                <h2 className="headers">ABOUT US</h2>
                <p className="my-font">Welcome to HNUB BLOOMS! We are just a bunch of plant lovers who turned our passion into a business. Our journey started with the simple joy of watching plants grow and thrive, and now we're here to share that joy with you. Whether you're a seasoned plant parent or just starting out, we're all about making the world a little greener. So come on in, explore our collection, and grow together. Thanks for being part of our green family!</p>
            </div>
        </div>
    );
};

export default Hero;