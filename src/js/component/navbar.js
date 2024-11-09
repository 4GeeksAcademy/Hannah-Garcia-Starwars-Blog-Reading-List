import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-5 mb-4">
            <Link to="/" className="navbar-brand text-light">Star Wars</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/characters" className="nav-link text-light">Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/planets" className="nav-link text-light">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/vehicles" className="nav-link text-light">Vehicles</Link>
                    </li>
                </ul>
                <div className="dropdown">
                    <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-heart text-danger"></i> Favorites [{store.favorites.length}]
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((fav, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between">
                                    <Link to={`/details/${fav.category}/${fav.index}`} className="text-decoration-none text-dark">
                                        {fav.name}
                                    </Link>
                                    <span onClick={() => actions.deleteFavorite(index)}>
                                        <i className="fa-solid fa-trash ms-2"></i>
                                    </span>
                                </li>
                            ))
                        ) : (
                            <li className="dropdown-item text-center">(empty)</li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
