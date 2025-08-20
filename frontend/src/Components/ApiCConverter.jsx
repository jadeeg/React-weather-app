import React, { useState, useEffect } from "react";
import "../Css/ApiCConverter.css";

export default function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(""); 
  const [error, setError] = useState(""); 

  useEffect(() => {
    fetch("https://api.frankfurter.app/currencies")
      .then((resp) => resp.json())
      .then((data) => {
        setCurrencies(Object.keys(data));
      });
  }, []);

  const convert = (from, to, amount) => {
   
    setResult("");
    setError("");

    if (from === to) {
      setError("From and To currencies must be different.");
      return;
    }

    fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const convertedAmount = data.rates[to];
        setResult(`${amount} ${from} = ${convertedAmount} ${to}`);
      })
      .catch((error) => {
        console.error("Conversion error:", error);
        setError("Something went wrong. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const to = e.target.to.value;
    const amount = e.target.amount.value;
    convert(from, to, amount);
  };

  return (
    <div className="converter-container">
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit} className="converter-form">
        <label className="converter-label">
          From: {""}
          <select name="from" required>
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="converter-label">
          To: {""}
          <select name="to" required>
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="converter-label">
          Amount: {""}
          <input type="number" name="amount" placeholder="100" required />
        </label>
        <br />
        <button type="submit" className="converter-button">
          Convert
        </button>
      </form>

      <div className="result-converter">
        {result && (
          <h3>
            Result:  <div className="result">{result} </div>
          </h3>
        )}
      </div>
    </div>
  );
}
