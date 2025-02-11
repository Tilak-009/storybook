import { useState,useEffect } from "react";
import {  FaCheckCircle, FaCircle, FaDotCircle, FaPen } from 'react-icons/fa';



function Homepage(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
    
    
    return(

<div className="home">
    <div className="logo1">AceCoin</div>
    <div className="logo2">Pay</div>
        
    <p>{time}</p>
    <div className="cardg">
        <strong>card number  <FaPen/>
        </strong>
   
        <i>Edit</i>
        <div className="etrcrd"> enter the 16-digit card number on the card</div>
        <div style={{
            border:"1px solid #ccc",
            width:"850px",
            height:"50px",
        }}>
           <div class="input-container">
  <input type="text" class="input-part" maxlength="4" opacity={0.4}/> <FaCircle size={12} color="#ccc" opacity={0.5} />

  <input type="text" class="input-part" maxlength="4" opacity={0.4} /> <FaCircle size={12} color="#ccc" opacity={0.5} />

  <input type="text" class="input-part" maxlength="4" opacity={0.4}/> <FaCircle size={12} color="#ccc" opacity={0.5} />

  <input type="text" class="input-part" maxlength="4" opacity={0.4}/> <FaCircle size={12} color="#ccc" opacity={0.5} />

  <FaCheckCircle color="blue"/>
</div>

        </div>
    </div>
</div>



    )
}

export default Homepage;