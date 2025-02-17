import React from "react";
import { FaAt, FaCheck, FaCheckCircle, FaInfo } from "react-icons/fa";
import "./order.css"
// import shoe1 from "./images/shoe1.jpg"
import shoe2 from "./images/shoe2.jpg"
import shoe3 from "./images/shoe3.jpg"
import shoe4 from "./images/shoe4.jpg"
import fed from "./images/fedex.jpg"
import dhl from "./images/DHL.png"
function Shoeorder(){

    return(


// main div
<div className="main">
<div style={{
    border:"1px solid black",
    display:"flex",
    flexDirection:"column",        
    height:"780px",
    width:"1000px",
    borderColor:"white"


}}>
    {/* 1small div */}
<div style={{
    border:"1px solid black",
    height:"60px",
    borderTopColor:"white",
    borderRightColor:"white",
    borderLeftColor:"white",
     display:"flex",
    flexDirection:"column",
    
}}><div className="h-comp">
    <p className="w-u">WearUp.</p>
    <p className="slaz">|</p>
    <p className="or">Order Overreview</p>
    <p className="info"><FaCheckCircle className="check"/><strong>information</strong></p>
    <p className="dash1">-----</p>
    <p className="p-d2">2</p>
    <p className="p-d">payment details</p>
    <p className="dash1">-----</p>
    <p className="p-d2">3</p>
    <p className="c-o">complete order</p>
    </div>
    </div>



{/* 2nd big */}
<div style={{
    border:"1px solid black",
    display:"flex",
    flexDirection:"row",        
    height:"730px",
    width:"1000px",
    borderColor:"white"


}}>
    {/* height left */}
    <div style={{
    border:"1px solid black",        
    height:"730px",
    width:"640px",
    display:"flex",
    justifyContent:"center",
    
    borderColor:"white"


}}> <div className="ordersum">
    <strong className="s-o">Summary Order</strong><br/>
<p className="summary">check your item and select your shopping for <br/>better experience order item</p>
{/* left iner box */}
<div className="lib">
<div style={{
border:"2px solid #ccc",
width:"440px",
display:"flex",
justifyContent:"center",
alignItems:"center",
borderRadius:"20px",
height:"310x",



flexDirection:"column"
}}>

<div className="inerbx1">
<div style={{
border:"2px solid white",
width:"400px",
height:"100px",
display:"flex",
flexDirection:"row", 



}}>
    <div className="imgbx1">
    <div style={{
    border:"2px solid #ccc",
    width:"100px",
    height:"80px",
    }}><img src={shoe4}/></div>
<div className="dscr1">New balance 57/40 <br/> mens Sneeker<br/><h3>$129.00</h3></div>
<div className="id1"><i>42EU-8.2Us</i></div>
    </div>



    </div>
 
</div>

<div className="inerbx2">
<div style={{
border:"2px solid white",
width:"400px",
height:"100px",}}> 
        <div className="imgbx2">
    <div style={{
    border:"2px solid #ccc",
    width:"100px",
    height:"80px",
    }}><img src={shoe2}/></div>
    <div className="dscr2">New balance 990TH <br/> mens Sneeker<br/><h3>$119.00</h3></div>
    <div className="id2"><i>42.5EU-9Us</i></div>
    </div>

</div>
</div>

<div className="inerbx3">
<div style={{
border:"2px solid white",
width:"400px",
height:"100px",}}>

<div className="imgbx3">
    <div style={{
    border:"2px solid #ccc",
    width:"100px",
    height:"80px",
    }}>
        <img src={shoe3}/>
 
        </div>
        <div className="dscr3">New balance 57/42 <br/> Womens Sneeker<h3>$194.00</h3></div>
        <div className="id3"><i>41.5EU-8Us</i></div>

        </div>
    </div>
    </div>
</div>

</div>

<div className="shm"><strong className="ss-method">Available shoping methods <span className="inicon"><FaInfo/></span></strong>
<div className="p-c">
    <div style={{
        
        width:80,
        height:60,
        paddingTop:20

    }}>
        <div className="fedbor">
     
        <img src={fed}/>
        
       <p className="delivery"><strong>FedEx delivery</strong>  <b><span className="f"> FREE</span>
         <span className="fbtn"><button onClick={SubmitEvent}></button></span>
       </b><br/>
       <i>delivery at 2-3 works</i>
     </p>
     <p className="ip">Available internationl shopping</p>
        </div>
   

        <div className="dhl">
    <div style={{
        
        width:80,
        height:60,
        paddingTop:20

    }}>

        <div className="p-c2">
        <div className="dhlbor">
     
        <img src={dhl}/>
        
       <p className="delivery2"><strong>FedEx delivery</strong>
         <b><span className="f1"> 12.00$</span>
         <span className="fbtn2"><button onClick={SubmitEvent}></button></span>
       </b><br/>
       <i>delivery at 1-3 works</i>
     </p>
        </div>
        </div>
        </div>
</div>
        </div>
</div>
</div>
</div>
</div>

{/* right */}
<div className="payment-m">
   <div style={{
    border:"1px solid black",        
    height:"730px",
    width:"460px",
    borderColor:"white"
   


}}>
<div className="p-section">
   <div className="p-dscr"> <strong className="p-details">Payment Details</strong><br/>
   <b >complete your purchase items by providing your <br/>
   Payment details order</b>
   <div className="e-input">
    <p><strong>Email</strong><FaAt className="@"/> <FaCheckCircle className="c-c"/><br/>
    <input type="email"
    id="email"
    placeholder="Enter Email"
    
    /></p>
   </div> 
   <div className="d-card">
    <p className="dd">
        <strong>Debit card</strong><br/>
        <input type="string"
        id ="card no."
        placeholder="enter valid card number"></input>
        <div className="cvc"><div style={{
                border:"1px solid black",
                
        }}></div>
        </div>
            </p>
   </div>
   </div>


</div>
</div>
</div>

</div>
</div>
</div>
      
    )}

    
    export default Shoeorder;