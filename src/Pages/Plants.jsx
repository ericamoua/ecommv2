// import Nav from "../Components/Nav";
// import Footer from "../Components/Footer";  
// import { useEffect, useState } from "react";
// import "../Styles/Plants.css";
// import "../Styles/Footer.css";
// function Plants (){
//     const [plants, setPlants] = useState([]);

//     useEffect(() => {
//         console.log("Fetching plants...");
//         fetch("/api/plants")
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//                 setPlants(data);
//             });
//     }, []);

//     function renderPlants() {
//         return plants.map((plant) => (
//             <div key={plant.id}>
//                 <h1>{plant.Plants}</h1>
//                 <p>{plant.Price}</p>
//                 <img className="plant-image" src={plant.ImageFilePath} alt={plant.Plants} />
//             </div>
//         ));
//     }

//     return (
//         <>
//             <Nav/>
//             {renderPlants()}
//         </>
//     )
// }

// export default Plants;

// import Nav from "../Components/Nav";
// import Footer from "../Components/Footer";  
// import { useEffect, useState } from "react";
// import "../Styles/Plants.css";
// import "../Styles/Footer.css";

// function Plants() {
//     const [plants, setPlants] = useState([]);

//     useEffect(() => {
//         console.log("Fetching plants...");
//         fetch("/api/plants")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 setPlants(data);
//             })
//             .catch((error) => {
//                 console.error("There was a problem with the fetch operation:", error);
//             });
//     }, []);

//     function renderPlants() {
//         return plants.map((plant) => (
//             <div key={plant.id}>
//                 <h1>{plant.Plants}</h1>
//                 <p>{plant.Price}</p>
//                 <img className="plant-image" src={plant.ImageFilePath} alt={plant.Plants} />
//             </div>
//         ));
//     }

//     return (
//         <>
//             <Nav/>
//             {renderPlants()}
//             <Footer/>
//         </>
//     )
// }

// export default Plants;

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import "../Styles/Plants.css";
import "../Styles/Footer.css";

function Plants() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        console.log("Fetching plants...");
        fetch("/api/plants")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPlants(data);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
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
            <Nav />
            {renderPlants()}
            <Footer />
        </>
    );
}

export default Plants;
