import React from "react"
import "./online.css"
import {FaCalendar, FaCapsules, FaCircleNotch, FaCog, FaComment, FaDeaf, FaGgCircle, FaHeart, FaRegCircle, FaSearch, FaShoppingBasket, FaShoppingCart, FaSignOutAlt, FaStar, FaThLarge} from 'react-icons/fa';
import logo from "./images/logo.png"

function Onlineshopping(){
    return(
        <div className="shopping">

            {/* main box */}
<div  className="mainbox" >
   

{/* sidebox */}
<div  className="smallbox"style={{
    border:"1px solid black",
    width:370,
    height:1300,
    position:"absolute",
    

}}>

    <div className="slogo" style={{
          border:"1px solid black",
          width:370,
          height:90,
          display:'flex',
          justifyContent:"center",
          alignItems:"center"
    }}>
        <div className="slogo" style={{
         
          width:180,
          height:60,
          paddingBottom:20
    }}> 
    
    <img src={logo} style={{
        width:160,
        height:90

}}/>
    
    </div>

    </div>
<div className="sidebar">
   <p><div className="dashboard"> <FaThLarge size={20} className="dashi"/> <h3>Dashboard</h3></div><br/>
   <div className="catogory"> <FaGgCircle size={20} className="dashi"/> <h3>Catogory</h3></div><br/>
   <div className="favourite"> <FaHeart size={20} className="dashi"/> <h3>Favourite</h3></div><br/>
   <div className="order2"> <FaShoppingCart size={20} className="dashi"/> <h3>Orders</h3></div><br/>
   <div className="messages"> <FaComment size={20} className="dashi"/> <h3>messages</h3></div><br/>
   <div className="topdeal"> <FaStar size={20} className="dashi"/> <h3>Top Deals</h3></div><br/>
   <div className="settings"> <FaCog size={20} className="dashi"/> <h3>Settings</h3></div><br/>
   <div className="logout"> <FaSignOutAlt size={20} className="dashi"/> <h3>logout</h3></div><br/>
   </p>
   </div>
</div>

<div  className="bigbox"style={{
    border:"1px solid black",
    width:1600,
    height:1300,
    
   
    

}}>

    
<div className="logo2" style={{
          border:"1px solid black",
          width:1230,
          height:90
    }}>

       <div className="sinput"> <input type="text" placeholder="Search your gloceries and etc.."  style={{
       
        position:"absolute",
        left:50,
        fontSize:"medium",
        border:"none"

       }}/>
       <FaSearch className="search" />
       
      <p> <FaCalendar className="calender"/> <h1 className="slas">|</h1></p>
       </div>
    </div>
</div>
</div>
</div>
    );

}

export default  Onlineshopping;