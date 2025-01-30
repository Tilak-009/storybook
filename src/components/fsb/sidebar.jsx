import React from "react";
import "./sidebar.css"
const SidebarMenu = ({ items, selected }) => {
  return (
    <div className="mbody">
        <div class="heading">
  <div class="foodie"><h3>foodie</h3></div>
  <div class="slice"><h3>slice</h3></div>
</div>


      <h2 className="menu">Menu</h2>
      <ul>
  {items.map((item) => (
    <li
      key={item.label}
      className={`flex items-center gap-2 p-2 rounded border border-gray-200 ${
        selected === item.label ? "bg-orange-500 text-white" : "hover:bg-gray-200"
      }`}
    >
      <img src={ dashboard} alt={item.label} className="w-8 h-8 rounded-full" />
      {item.label}
    </li>
  ))}
</ul>

    </div>
  );
};

export default SidebarMenu;
