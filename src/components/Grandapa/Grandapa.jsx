import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandapa.css';

export const RingContext = createContext('💍');
export const MoneyContext = createContext(0);

const Grandapa = () => {

    const ring = "💍";
    const [money, setMoney] = useState(0);

    return (
        <div className='grandpa'>
            <h2>Grandapa</h2>
            <p>Has Money: {money}</p>

            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value="💍">
                    <section className='flex'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandapa;

/**
 * 01. create context and export
 * 02. create a provider and pass a value
 * 03. use useContext to receive
*/