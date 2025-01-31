import React from "react";
import { FaHome, FaUtensils, FaComments, FaEnvelope, FaHistory, FaCreditCard, FaSlidersH } from "react-icons/fa";
import "./sidebar.css";
// import logo from "./images/bglogo1.png"
import bottom from "./images/web.webp"

const SidebarMenu = ({ items, selected }) => {
  return (


    <div class="container">
      <div class="half left">
    <div className="mbody">
      <div className="heading">
        <div className="heading">
          
       {/* <div className="logo" ><img src={logo}/></div> */}
          <h3 className="foodie">foodi</h3>
          <h3 className="slice">slice</h3>
          <div className="btmdesc">
          <div className="btmimg"><img src={bottom} />
          <h2>how to order food?</h2>
<b>
            <p>ordering food from our web app is<br/>
             seamless and delightfull experirnce designed<br/>
              to satisfy you effortlessly</p>
              </b>
          </div>
</div>
    </div>
        </div>

      </div>

      <ul>
        {items.map((item) => (
          <li
            key={item.label}
          >
            <span className="text-xl">{item.icon}</span> 
            {item.label}
          </li>
          
        ))}
      </ul>
    
    </div>
  
   </div>
   
  );
};

export default SidebarMenu;
