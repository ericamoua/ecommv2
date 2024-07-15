import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "../Components/About"
import Course from "../Components/Course";
import Carol from '../Components/Carol';
import Footer from '../Components/Footer';


function Home (){
    return (
        <div>
        <Nav/>
        <Hero/>
        <About/>
        <Course/>
        <Carol/>
        <Footer/>
        </div>
    )
}

export default Home;