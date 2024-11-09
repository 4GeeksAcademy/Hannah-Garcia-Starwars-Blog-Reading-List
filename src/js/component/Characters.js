import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Card } from '../component/card';

const Characters = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1 className="text-light my-4">Characters</h1>
            <div className="row">
                {store.characters.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <Card item={item} index={index} category="characters" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;
