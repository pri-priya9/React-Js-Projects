import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => setCurrencies(Object.keys(data.rates)));
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.rates[toCurrency];
          setConvertedAmount((amount * rate).toFixed(2));
        });
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700 p-8 relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur opacity-40 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold text-white mb-8 drop-shadow-lg tracking-wide">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">💱 Currency Converter</span>
          </h1>
          <div className="flex flex-col space-y-5">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner transition"
              placeholder="Amount"
              min="0"
            />
            <div className="flex space-x-3">
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner transition"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
              <span className="flex items-center text-gray-400 font-bold px-2">→</span>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-inner transition"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
            <div className="mt-6">
              <p className="text-2xl font-bold text-pink-400 drop-shadow-lg">
                {convertedAmount ? `💰 ${convertedAmount} ${toCurrency}` : "Calculating..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;