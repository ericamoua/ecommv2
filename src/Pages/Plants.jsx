import Nav from "../Components/Nav";
import Footer from "../Components/Footer";  
import { useEffect, useState } from "react";
import "../Styles/Plants.css";
import "../Styles/Footer.css";
function Plants (){
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("/api/plant")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPlants(data);
            })
            ;
    }, []);

    function renderPlants() {
        return plants.map((plant) => (
            <div key={plant.id}>
                <h1>{plant.Plants}</h1>
                <p>{plant.Price}</p>
                <img className="plant-image" src={plant.bImageFilePath} alt={plant.Plants} />
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