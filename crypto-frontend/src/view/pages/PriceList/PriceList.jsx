import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from './../../../image/crypto.jpg'

export const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        // Fetch prices from the backend
        axios.get('http://localhost:5000/crypto/api/prices')
            .then(response => {
                setPrices(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-800 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Crypto Details</h2>
            <ul className="flex justify-center gap-2 flex-wrap">
                {prices.map((crypto) => (
                    <li
                        key={crypto.symbol}
                        className="border-[1px] border-solid py-6 flex w-[250px] justify-between items-center hover:bg-cyan-700 transition-all
                         duration-300 rounded-lg px-4"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    src={Logo}
                                    alt={crypto.name}
                                    className="w-12 h-12 mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">{crypto.name}</h3>
                                <p className="text-sm text-gray-400">{crypto.symbol}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-semibold text-white">{crypto.price}</p>
                            <p
                                className={`text-lg font-medium ${
                                    crypto.change.startsWith('+')
                                        ? 'text-green-400'
                                        : 'text-red-400'
                                }`}
                            >
                                {crypto.change}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
