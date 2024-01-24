
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const handleSubmit = () => {
    axios
      .get(`http://localhost:8080/sum/${number1},${number2}`)
      .then((response) => {
        setSum(response.data);
      })
      .catch((error) => {
        console.error('Error calculating sum:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1 className="text-center">SUM OF TWO NUMBERS</h1>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="number1">Enter Number 1:</label>
            <input
              type="text"
              className="form-control"
              id="number1"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="number2">Enter Number 2:</label>
            <input
              type="text"
              className="form-control"
              id="number2"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
            />
          </div>
        </div>
        <div className="card-footer text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-center">The Sum is: {sum}</h2>
      </div>
    </div>
  );
}

export default App;

