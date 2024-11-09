import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({ item, index, category }) => {
    const { store, actions } = useContext(Context);
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img";
    const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL_y7zYXVM4LBHeAJDifuMJVjWmjnROn12g&s";
    
    const [imgSrc, setImgSrc] = useState(`${GUIDE_URL}/${category}/${index + 1}.jpg`);
    
    const handleImgErr = () => {
        setImgSrc(fallbackImage);
    };

    const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category);

    const handleFavorite = () => {
        if (isFavorite) {
            const indexToDelete = store.favorites.findIndex(fav => fav.name === item.name && fav.category === category);
            if (indexToDelete !== -1) {
                actions.deleteFavorite(indexToDelete);
            }
        } else {
            actions.addFavorite({ name: item.name, index, category });
        }
    };

    return (
        <div className="card m-3 bg-dark text-light" style={{ minWidth: "18rem" }}>
            <img src={imgSrc} onError={handleImgErr} style={{ height: "auto" }} className="card-img-top" alt="N/A" />
            <div className="card-body p-3 d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    {category === "characters" ? `Gender: ${item.gender}` :
                     category === "planets" ? `Population: ${item.population}` :
                     `Crew: ${item.crew}`}
                </p>
                <div className="d-flex justify-content-between mt-auto">
                    <Link to={`/details/${category}/${index}`} className="btn btn-outline-light">
                        Learn more!
                    </Link>
                    <button className="btn text-light" onClick={handleFavorite}>
    <i className={`fa-heart ${isFavorite ? "fa-solid text-danger" : "fa-regular"}`}></i>
</button>

                </div>
            </div>
        </div>
    );
};
