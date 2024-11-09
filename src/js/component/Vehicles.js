import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Card } from '../component/card';

const Vehicles = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1 className="text-light my-4">Vehicles</h1>
            <div className="row">
                {store.vehicles.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <Card item={item} index={index} category="vehicles" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vehicles;
