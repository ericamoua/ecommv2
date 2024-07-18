import Nav from "../Components/Nav";
import Footer from "../Components/Footer";  
import { useEffect, useState } from "react";
import "../Styles/Plants.css";
import "../Styles/Footer.css";
function Plants (){
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        console.log("Fetching plants...");
        fetch("/api/plants")
            .then((response) => response.json())
            .then((data) => {
                setPlants(data);
            });
    }, []);

    function renderPlants() {
        return plants.map((plant) => (
            <div key={plant.id}>
                <h1>{plant.Plants}</h1>
                <p>{plant.Price}</p>
                <img className="plant-image" src={plant.ImageFilePath} alt={plant.Plants} />
            </div>
        ));
    }

    return (
        <>
            <Nav/>
            {renderPlants()}
        </>
    )
}

export default Plants;