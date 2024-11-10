import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="display-3 text-warning">STAR WARS</h1>
            <h2 className="text-light mb-5">A Visual Guide</h2>
            <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                    <Link to="/characters" className="card bg-dark text-white border-0">
                        <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img" alt="Characters"
                            style={{ height: "300px", objectFit: "cover" }} />
                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 className="card-title bg-dark bg-opacity-75 p-2 rounded">CHARACTERS</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-4">
                    <Link to="/vehicles" className="card bg-dark text-white border-0">
                        <img src="https://starwars-visualguide.com/assets/img/vehicles/4.jpg" className="card-img" alt="Vehicles" 
                            style={{ height: "300px", objectFit: "cover" }}/>
                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 className="card-title bg-dark bg-opacity-75 p-2 rounded">VEHICLES</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-4">
                    <Link to="/planets" className="card bg-dark text-white border-0">
                        <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" className="card-img" alt="Planets"
                            style={{ height: "300px", objectFit: "cover" }} />
                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 className="card-title bg-dark bg-opacity-75 p-2 rounded">PLANETS</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
