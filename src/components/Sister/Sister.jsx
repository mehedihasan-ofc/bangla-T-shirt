import React, { useContext } from 'react';
import { MoneyContext } from '../Grandapa/Grandapa';

const Sister = () => {

    const [money] = useContext(MoneyContext);

    return (
        <div>
            <h2>Sister</h2>
            <p>Granpa Money: {money}</p>
        </div>
    );
};

export default Sister;