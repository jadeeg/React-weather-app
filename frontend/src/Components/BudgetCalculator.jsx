import React from "react";
import {useState} from "react";
import "../Css/BudgetCalculator.css";


export default function BudgetCalculator(){
  const [hotel, setHotel] = useState("");
  const [flights, setFlights] = useState("");
  const [food, setFood] = useState("");
  const [ativities, setAtivities] = useState("");
  const [total, setTotal] = useState(null);

  const calculateTotal = (event) => {
    event.preventDefault();

    const totalCost =
      parseFloat(hotel || 0) +
      parseFloat(flights || 0) +
      parseFloat(food || 0) +
      parseFloat(ativities || 0) ;
    setTotal(totalCost);
  };
  return (
    <div className="budget-container">
      <h2>Trip Budget Calculator</h2>
      <form onSubmit={calculateTotal} className="budget-form">
        <label className="budget-label">
          Hotel: {""}
          <input
            type="number"
            value={hotel}
            onChange={(event) => setHotel(event.target.value)}
            placeholder="160"
          />
        </label>
        <label className="budget-label">
          Flight: {""}
          <input
            type="number"
            value={flights}
            onChange={(event) => setFlights(event.target.value)}
            placeholder="500"
          />
        </label>
        <label className="budget-label">
          Food: {""}
          <input
            type="number"
            value={food}
            onChange={(event) => setFood(event.target.value)}
            placeholder="100"
          />
        </label>
        <label className="budget-label">
          Ativities: {""}
          <input
            type="number"
            value={ativities}
            onChange={(event) => setAtivities(event.target.value)}
            placeholder=" 150"
          />
        </label>
        <br />
        <button type="sbumit" className="budget-button">
          {" "}
          Total
        </button>
      </form>
      {total !== null && (
        <div class="result-budget">
          <h3 className="result">
            Total Trip Cost: {""} ${total.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
}

      