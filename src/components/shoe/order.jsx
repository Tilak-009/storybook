import React from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import "./order.css"
import shoe1 from "./images/shoe1.jpg"

function Shoeorder(){

    return(


// main div
<div style={{
    border:"1px solid black",
    display:"flex",
    flexDirection:"column",        
    height:"800px",
    width:"1000px",
    // borderColor:"white"


}}>
    {/* 1small div */}
<div style={{
    border:"1px solid black",
    height:"70px",
    // borderTopColor:"white",
    // borderRightColor:"white",
    // borderLeftColor:"white"
     display:"flex",
    flexDirection:"column",
    
}}><div className="h-comp">
    <p className="w-u">WearUp</p>
    <p className="slaz">|</p>
    <p className="or">order review</p>
    <p className="info"><FaCheckCircle/>informstion</p>
    <p className="dash1">-----</p>
    <p className="p-d2">2</p>
    <p className="p-d">payment details</p>
    <p className="dash1">-----</p>
    <p className="c-o3">3</p>
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
    // borderColor:"white"


}}>
    {/* height left */}
    <div style={{
    border:"1px solid black",        
    height:"730px",
    width:"550px",
    display:"flex",
    justifyContent:"center",
    
    // borderColor:"white"


}}> <div className="ordersum"><strong className="s-o">Summary Order</strong><br/>
<p className="summary">check your item and select your shopping for <br/>better experience order item</p>
{/* left iner box */}
<div style={{
border:"2px solid #ccc",
width:"450px",
display:"flex",
justifyContent:"center",
alignItems:"center",
borderRadius:"30px",
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
    }}><img src={shoe1}/></div>
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
    }}><img src={shoe1}/></div>
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
        <img src={shoe1}/>
        <div className="dscr3">New balance 57/42 <br/> Womens Sneeker<h3>$194.00</h3></div>
    <div className="id3"><i>41.5EU-8Us</i></div>
        </div>
    </div>
    </div>
</div>

</div>
</div>
</div>

{/* right */}
   <div style={{
    border:"1px solid black",        
    height:"730px",
    width:"550px",
    // borderColor:"white"


}}></div>

</div>
</div>
      
    )}
    
    export default Shoeorder;