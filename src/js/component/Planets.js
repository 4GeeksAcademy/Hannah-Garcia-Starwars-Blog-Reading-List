import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Card } from '../component/card';

const Planets = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1 className="text-light my-4">Planets</h1>
            <div className="row">
                {store.planets.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <Card item={item} index={index} category="planets" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planets;
