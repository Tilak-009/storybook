import React from "react";
import { FaHome, FaUtensils, FaComments, FaEnvelope, FaHistory, FaCreditCard, FaSlidersH } from "react-icons/fa";
import "./sidebar.css";
import logo from "./images/bglogo1.png"

const SidebarMenu = ({ items, selected }) => {
  return (
    <div className="mbody">
      <div className="heading">
        <div className="heading">
          
       <div className="logo" ><img src={logo}/></div>
          <h3 className="foodie">foodi</h3>
          <h3 className="slice">slice</h3>
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
