import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Details = ({ category }) => {
    const { store } = useContext(Context);
    const [imgErr, setImgErr] = useState(false);
    const params = useParams();
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img";
    const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL_y7zYXVM4LBHeAJDifuMJVjWmjnROn12g&s";

    const getItem = () => {
        if (category === "characters") return store.characters[params.id];
        if (category === "planets") return store.planets[params.id];
        return store.vehicles[params.id];
    };

    const item = getItem();

    const getImageUrl = () => (imgErr ? fallbackImage : `${GUIDE_URL}/${category}/${parseInt(params.id) + 1}.jpg`);
    const handleImgErr = () => setImgErr(true);

    return (
        <div className="card bg-dark text-light mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={getImageUrl()} onError={handleImgErr} className="img-fluid rounded-start" alt="N/A" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.name}</h5>
                        <p className="card-text">
                            <strong>Attribute 1:</strong> {item.attribute1}
                        </p>
                        <p className="card-text">
                            <strong>Attribute 2:</strong> {item.attribute2}
                        </p>
                        <p className="card-text">
                            <strong>Attribute 3:</strong> {item.attribute3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
