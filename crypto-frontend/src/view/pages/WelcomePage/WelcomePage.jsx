import React, { useState } from 'react';
import { PriceList } from '../PriceList/PriceList';

export const WelcomePage = () => {
    const [showPriceList, setShowPriceList] = useState(false);

    const handleGetStartedClick = () => {
        setShowPriceList(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-600 to-pink-500 text-white">
            {!showPriceList ? (
                <div className="text-center p-5">
                    <h1 className="text-4xl md:text-8xl font-bold mb-4">
                        Welcome to Crypto Exchange
                    </h1>
                    <p className="text-lg md:text-2xl mb-8">
                        Trade your favorite cryptocurrencies securely and efficiently.
                    </p>
                    <div className="flex space-x-4 justify-center">
                        <button
                            onClick={handleGetStartedClick}
                            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600 transition"
                        >
                            View Cryptocurrency Details
                        </button>
                    </div>
                </div>
            ) : (
                <PriceList />
            )}
        </div>
    );
};
