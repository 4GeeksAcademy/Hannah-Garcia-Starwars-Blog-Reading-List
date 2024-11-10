import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Details = ({ category }) => {
    const { store } = useContext(Context);
    const [imgErr, setImgErr] = useState(false);
    const [relatedData, setRelatedData] = useState({});
    const params = useParams();
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img";
    const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL_y7zYXVM4LBHeAJDifuMJVjWmjnROn12g&s";

    const getItem = () => {
        if (category === "characters") return store.characters[params.id];
        if (category === "planets") return store.planets[params.id];
        return store.vehicles[params.id];
    };

    const item = getItem();

    const fetchRelatedData = async (key, urls) => {
        const results = await Promise.all(
            urls.map(url =>
                fetch(url)
                    .then(response => response.json())
                    .then(data => data.result.properties.name || data.result.properties.title)
            )
        );
        setRelatedData(prevData => ({ ...prevData, [key]: results }));
    };

    useEffect(() => {
        if (item) {
            Object.entries(item).forEach(([key, value]) => {
                if (Array.isArray(value) && value.length > 0 && typeof value[0] === "string" && value[0].startsWith("https://swapi.dev/api/")) {
                    fetchRelatedData(key, value);
                }
            });
        }
    }, [item]);

    const getImageUrl = () => (imgErr ? fallbackImage : `${GUIDE_URL}/${category}/${parseInt(params.id) + 1}.jpg`);
    const handleImgErr = () => setImgErr(true);

    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <div className="card bg-dark text-light mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={getImageUrl()} onError={handleImgErr} className="img-fluid rounded-start" alt="N/A" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.name}</h5>
                        <div className="mt-3">
                            {Object.entries(item).map(([key, value]) => (
                                <p className="card-text" key={key}>
                                    <strong>{key.replace(/_/g, " ").toUpperCase()}:</strong>{" "}
                                    {Array.isArray(value) && value.length > 0 && typeof value[0] === "string" && value[0].startsWith("https://swapi.dev/api/") ? (
                                        relatedData[key] ? relatedData[key].join(", ") : "Loading..."
                                    ) : (
                                        value || "N/A"
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
