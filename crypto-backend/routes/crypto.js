var express = require('express');
var router = express.Router();

// Sample prices data
const prices = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$26,540', change: '-1.25%' },
    { name: 'Ethereum', symbol: 'ETH', price: '$1,645', change: '+0.75%' },
    { name: 'Binance Coin', symbol: 'BNB', price: '$210', change: '-0.50%' },
    { name: 'Ripple', symbol: 'XRP', price: '$0.52', change: '+2.08%' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.26', change: '+1.02%' },
    { name: 'Solana', symbol: 'SOL', price: '$19.85', change: '+1.57%' },
    { name: 'Dogecoin', symbol: 'DOGE', price: '$0.06', change: '-0.60%' },
    { name: 'Polygon', symbol: 'MATIC', price: '$0.54', change: '+0.98%' },
    { name: 'Litecoin', symbol: 'LTC', price: '$64.50', change: '-0.45%' },
    { name: 'Polkadot', symbol: 'DOT', price: '$4.30', change: '+1.12%' }
];

// API route to return the prices data
router.get('/api/prices', function(req, res, next) {
    res.json(prices);
});

module.exports = router;
