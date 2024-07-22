import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Styles/Plants.css";
import "../Styles/Footer.css";

function Plants() {
    // State to store the fetched plant data
    const [plants, setPlants] = useState([]);
    
    // States to store filter values
    const [minPriceFilter, setMinPriceFilter] = useState('');
    const [maxPriceFilter, setMaxPriceFilter] = useState('');
    const [petFriendlyFilter, setPetFriendlyFilter] = useState('');

    // useEffect hook to fetch data from the server whenever the filter values change
    useEffect(() => {
        console.log("Fetching plants...");
        
        // Construct the query URL based on filter values
        let query = "/api/plants?";
        if (minPriceFilter) query += `minPrice=${minPriceFilter}&`;
        if (maxPriceFilter) query += `maxPrice=${maxPriceFilter}&`;
        if (petFriendlyFilter) query += `pet_friendly=${petFriendlyFilter}&`;

        // Fetch data from the server using the constructed URL
        fetch(query)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPlants(data); // Update the plants state with the fetched data
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }, [minPriceFilter, maxPriceFilter, petFriendlyFilter]); // Dependencies: fetch data when any of these values change

    // Function to render the plant data
    function renderPlants() {
        return plants.map((plant) => (
            <div className="container-plant" key={plant.id}>
                <div className="card">
                    <h2>{plant.Plants}</h2>
                    <p className="plant-price">{plant.Price}</p>
                    <p className="plant-detail">{plant.Detail}</p>
                    <p className="plant-pet-friendly">Pet Friendly: {plant.Pet_Friendly}</p>
                    <img className="plant-image" src={plant.ImageFilePath} alt={plant.Plants} />
                    {/* <button>Buy Now</button> */}
                </div>
                <div className="buy-now">
                <button className="button-now">
                    <svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                    </svg>
                        <p className="text">Buy Now</p>
                </button>
                </div>
            </div>
        ));
    }

    // JSX to render the filter inputs and the plant data
    return (
        <>
            <Nav />
            <div className="filter-container">
                <label>
                    Min Price:
                    <input
                        type="number"
                        value={minPriceFilter}
                        onChange={(e) => setMinPriceFilter(e.target.value)} // Update state on input change
                    />
                </label>
                <label>
                    Max Price:
                    <input
                        type="number"
                        value={maxPriceFilter}
                        onChange={(e) => setMaxPriceFilter(e.target.value)} // Update state on input change
                    />
                </label>
                <label>
                    Pet Friendly:
                    <select value={petFriendlyFilter} onChange={(e) => setPetFriendlyFilter(e.target.value)}> // Update state on select change
                        <option value="">All</option>
                        <option value="TRUE">Yes</option>
                        <option value="FALSE">No</option>
                    </select>
                </label>
            </div>
            <div className="plant-container">
                {renderPlants()} 
            </div>
            <Footer />
        </>
    );
}

export default Plants;
