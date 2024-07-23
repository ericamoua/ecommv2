const About = () => {
    return (
        <div>
            <div className="about-info">
            <h2 className="headers">ABOUT US</h2>
            <p className="my-font">Welcome to HNUB BLOOMS! We are just a bunch of plant lovers who turned our passion into a business. Our journey started with the simple joy of watching plants grow and thrive, and now we're here to share that joy with you. Whether you're a seasoned plant parent or just starting out, we're all about making the world a little greener. So come on in, explore our collection, and grow together. Thanks for being part of our green family!</p>
            </div>
            
            
            <div className="about-container">
                <div className="store-image">
                <img src="images/storePlant.webp" alt="store plant"/>
                </div>

                <div className="address-info">
                    <h4 className="headers-light">Impact</h4>
                    <p className="my-font">Plants are not just decorations; they are life givers and mood boosters. At HNUB BLOOMS, we believe in the transformative power of greenery. Beyond their aesthetic appeal, plants purify the air we breathe, creating healthier environments for us to thrive in. They also offer a sense of tranquility, reducing stress and enhancing overall well being. Whether you're looking to add a touch of nature to your home or office, or seeking to embark on a journey of nurturing life, our diverse selection of plants promises to enrich your space and uplift your spirits.</p>
                    <h4 className="headers-light">Address</h4>
                    <p className="my-font">Walt Disney World Resort, 1375 E Buena Vista Dr, Orlando, FL</p>
                    <p className="my-font-a">
                        Phone: <a href="tel:+14079396000">407-939-6000</a>
                    </p>
                    <p className="my-font-a">
                        Email: <a href="mailto:hnubblooms@planthouse.us">hnubblooms@planthouse.us</a>
                    </p>

                    <p className="my-font">Monday | CLOSED
                    Tuesday - Thursday | 11AM - 6PM
                    Friday | 11AM - 8PM
                    Saturday | 10AM-8PM
                    Sunday | 11AM - 6PM</p>
                </div>

                <button className="custom-button learn-more-custom">
                    <span className="circle-custom" aria-hidden="true">
                        <span className="icon arrow-custom"></span>
                    </span>
                        <span className="button-text-custom">Learn More</span>
                </button>

            </div>
        </div>
    );
};

export default About;
