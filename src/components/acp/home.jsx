import { useState,useEffect } from "react";
import {   FaCheckCircle, FaCircle, FaDotCircle, FaGooglePlay, FaPen } from 'react-icons/fa';
import "./home.css"



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
    <div className="logo">
    <div className="logo1">AceCoin</div>
    <div className="logo2">Pay</div>
    <div className="timer">{time}</div>

    </div>
    <div className="cardg">
        <div className="card-no"><strong>card number  
        </strong></div>
   
        <i><FaPen/>Edit</i>
        <div className="etrcrd"> enter the 16-digit card number on the card</div>
        <div style={{
            border:"1px solid #ccc",
            width:"600px",
            height:"50px",
        }}>
           <div class="input-container">
  <input type="text" class="input-part" maxlength="4" opacity={0.4} width="2px"/> <FaCircle size={12} color="#ccc" opacity={0.5} />

  <input type="text" class="input-part" maxlength="4" opacity={0.4} /> <FaCircle size={12} color="#ccc" opacity={0.5} />

  <input type="text" class="input-part" maxlength="4" opacity={0.4}/> <FaCircle size={12} color="#ccc" opacity={0.5} />

  <input type="text" class="input-part" maxlength="4" opacity={0.4}/> <FaCircle size={12} color="#ccc" opacity={0.5} />

  <FaCheckCircle color="blue"/>
</div>


<div className="ccv">
    <div className="crds">
    CVV Number</div>
    <div className="inptcard">Enter the 3 or 4  digit number on card</div>
    <div className="cvv-input">
        <input style={{
            width:"350px",
            height:"50px"
        }} 
         type="text" maxLength={4} />

    </div>

</div>

<div className="expdate">
    <strong>Expiry date</strong>
    <p>enter the expiration date of the card</p>
</div>
<div className="month">
<input style={{
            width:"150px",
            height:"50px"
        }} 
         type="text" maxLength={4} />          /
</div>
<div className="date">
<input style={{
            width:"150px",
            height:"50px"
        }} 
         type="text" maxLength={4} />          

</div>

<div className="passwd">
    <div className="pass"><strong>password</strong>
    <p>enter the dynamic password</p></div>
</div>
<div className="inpass">
<input style={{
            width:"150px",
            height:"50px"
        }} 
         type="password" maxLength={10} />  
</div>
<button onClick={SubmitEvent}>pay n</button>
        </div>
    </div>
</div>



    )
}

export default Homepage;