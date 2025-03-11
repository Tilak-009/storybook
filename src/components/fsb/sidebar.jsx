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
              <div className="bcimg1" style=
              {{
                // border:"1px solid black",
                 width:400,
                 height:250
              }}>
<img src={bottom} style={{
  width:400,
  height:250,
  // paddingLeft:30,
  borderRadius:30
}}/>
              </div>
          
   <div className="dscr">            
        <h2 style={{
          padding:0,
          margin:0
        }}>how to order food?</h2>
<b className="dsc" style={{
  padding:0,
  margin:0

}}>
            <p>ordering food froms our web app is<br/>
             seamless and delightfull experirnce designed<br/>
              to satisfy you effortlessly</p>
              </b>
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

   
  );
};

export default SidebarMenu;
