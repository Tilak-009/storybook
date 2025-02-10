import React, { useState } from "react";
import image1 from "./images/image1.webp"
import"./Emicalculator.css"

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(469000); 
  const [duration, setDuration] = useState(4); 
  const rateOfInterest = 14.5; 

  const calculateEMI = () => {
    const monthlyRate = rateOfInterest / (12 * 100);
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, duration * 12)) /
      (Math.pow(1 + monthlyRate, duration * 12) - 1);
    return emi.toFixed(0);
  };

  return (
    <div className="calculator">
      <h2 className="heading">EMI Calculator</h2>
      <p className="description">
        Avail upto 100% of the car value in finance at attractive interest rates
      </p>

      <div className="stickbar">
        <label className="joystick">
          <h3>Loan Amount</h3>
        </label>
       
        <input
          type="range"
          min="0"
          max="521000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseInt(e.target.value))}
          className="w-full"
        />
        <div className="interest">{`₹${(loanAmount / 100000).toFixed(
          2
        )} Lakh`}</div>
      </div>
        
        <img src={image1}/>
      
      <div className="time">
        <label className="duration">
          <b>Duration</b> in years
        </label>
        <div className="boxes">
          {[1, 2, 3, 4, 5].map((year) => (
            <button
              key={year}
              className={`rounded ${
                duration === year
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setDuration(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="intrests">
        <p className="rateofintrset">
          Rate of interest @ {rateOfInterest}% for {duration} years
        </p>
        <p className="monthlyemi">
          <b>Your Monthly EMI:</b>
           <h1>₹{calculateEMI()} </h1> <a href="" class="blue-url">view breakup</a>
          
        </p>
      </div>

      <button className="r-btn">
        Interested In Loan
      </button>
      <p className="loanintrest">
        *Interest rate and loan amount offered may vary subject to customer risk
        profile
      </p>
    </div>
  );
};

export default EMICalculator;
