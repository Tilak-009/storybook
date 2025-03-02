import React from "react";

import "./sidebar.css";
// import logo from "./images/bglogo1.png"
import bottom from "./images/web.webp"

const SidebarMenu = ({ items, selected }) => {
  return (


    <div class="container">
      <div class="half left">
    <div className="mbody">
      <div className="heading">
        
          
       {/* <div className="logo" ><img src={logo}/></div> */}
          <h3 className="foodie">foodi</h3>
          <h3 className="slice">slice</h3>
  </div>
          <div className="btmimg"> 
     <div style={{
  
              position:"absolute",
             top:"750px",
             left:"80px",
              width:"300px",
              height:"150px",
         
            }}>
              <div className="bcimg">
              
          
              <img src={bottom}/>
            </div></div>
        <h2>how to order food?</h2>
<b>
            <p>ordering food froms our web app is<br/>
             seamless and delightfull experirnce designed<br/>
              to satisfy you effortlessly</p>
              </b>
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

   
  );
};

export default SidebarMenu;
