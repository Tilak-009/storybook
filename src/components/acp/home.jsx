import { useState,useEffect } from "react";
import {   FaAddressCard, FaApple, FaCaretSquareLeft, FaCheckCircle, FaCircle, FaComment, FaCommentAlt, FaDotCircle, FaGooglePlay, FaPen, FaSdCard, FaSimCard, FaSquare, FaWifi } from 'react-icons/fa';
import "./home.css"
import mstrcard from "./icons/mastercard.png"


function Homepage(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
    
    
    return(
<div className="outline">
<div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    
    }}>
      <div style={{
        border: "1px solid black",
        width: "920px",
        height: "620px",
        display:"flex",
        // justifyContent:"flex-end"
      }}><div className="home">

      <div className="logo">
      <div className="lg" style={{ marginLeft: "50px"}}>
      <img src={mstrcard} alt="mastercard logo"/>
      <div className="logo1">AceCoin</div>
      <div className="logo2">Pay</div></div>
      <div className="timer">{time}</div>
  
      </div>
      <div className="cardg">
          <div className="card-no"><strong>card number  
          </strong></div>
     
          <i><FaPen/>Edit</i>
          <div className="etrcrd"> enter the 16-digit card number on the card</div>
          <div style={{
              border:"1px solid white",
              width:"600px",
              height:"50px",
          }}>
             <div class="input-container">
    <input type="text" class="input-part" maxlength="4" opacity={0.4}  /> <FaCircle size={12} color="black" opacity={0.5} />
  
    <input type="text" class="input-part" maxlength="4" opacity={0.4} /> <FaCircle size={12} color="black" opacity={0.5} />
  
    <input type="text" class="input-part" maxlength="4" opacity={0.4}/> <FaCircle size={12} color="black" opacity={0.5} />
  
    <input type="text" class="input-part" maxlength="4" opacity={0.4}/> <FaCircle size={12} color="black" opacity={0.5} />
  
    <FaCheckCircle color="blue"/>
  </div>
  
  
  <div className="ccv">
      <div className="crd">
  CVV Number
      <p>Enter the 3 or 4  digit number on card</p></div>
      <div className="cvv-input">
   
      {/* <FaSquare className="crdicon"/> */}
          <input style={{
              width:"150px",
              height:"50px",
          }} 
           type="text" maxLength={4} 
          
           />
         {/* <FaSquare className="crdicon"/> */}
         </div>
      
  
  </div>
  <div className="times">
  <div className="expdate">
      Expiry date
      <p>enter the expiration date of the card</p>
  </div>
  <div className="month">
  <input style={{
              width:"100px",
              height:"50px"
          }} 
           type="text" maxLength={4} />          /         
  
  
  <input style={{
              width:"100px",
              height:"50px"
          }} 
           type="text" maxLength={4} />          
  {/* <FaSquare className="timeicon"/> */}
  </div>
  </div>
  
  <div className="passwd">
      <div className="pass">password
      <p>enter the dynamic password</p></div>
  
  <div className="inpass">
  <div className="painpt"><input style={{
              width:"150px",
              height:"50px"
          }} 
           type="password" maxLength={10} />
</div>
           {/* <FaSquare className="passicon"/>   */}
  </div>
  </div>
  <div className="payn">
  <button onClick={SubmitEvent}>pay now</button></div>
          </div>
      </div>
  </div>
  
  
  
        <div style={{
          display: "flex",
          border: "1px solid white",
          height: "595px",
          width: "350px",
          flexDirection: "column",
          alignItems:"center",
         
        

          
        }}> 
        <div className="box">

          {/* outer */}
        <div className="outer-box">

          <div className="descr">
            <p className="company">company</p>
            <p className="apple"><FaApple/>Apple</p>
            <p className="on">order number</p>
            <p className="no">123456789</p>
            <p className="product">product</p>
            <p className="mac">mackbook air</p>
            <p className="vat">Vat(20%)</p>
            <p className="doller">$100.000</p>
          </div>

          <div className="pay">
            <p className="yhp">you have to pay <br/><h3>549.99USD</h3></p>
           
            <p className="c-icon"><FaCommentAlt/></p>
          </div>
        </div>










        {/* innerbox */}
        <div className="inner-box">
          <div className="mainicon">
           <div className="m-icons"><FaSimCard className="simicon"/></div>
        <div className="m-icon2"><FaWifi className="wifiicon"/></div> 
        </div>
                <div className="u-name">jonathan michael</div>
        <div className="cardno">****  3456</div>


        <div className="lg-expr">
        <div className="expr">09/12</div>
        <div className="lg1"><img src={mstrcard} alt={mstrcard} /></div>
        </div>



        
        </div>
        </div>
              </div>

        </div>
      </div>
    </div>
  
    // </div>



    )
}

export default Homepage;