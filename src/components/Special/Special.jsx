import React, { useContext } from 'react';
import { RingContext } from '../Grandapa/Grandapa';

const Special = () => {

    const ring = useContext(RingContext);

    return (
        <div>
            <h2>Special</h2>
            <p>{ring}</p>
        </div>
    );
};

export default Special;