import React from "react";
import SidebarMenu from "./sidebar";
import "./sidebar.css";

export default {
  title: "components/fsb/sidebar",
  component: SidebarMenu,
};

const menuItems = [
  { label: "Dashboard",icon:"./das"  },
  { label: "Food Order" },
  { label: "Feedback" },
  { label: "Message" },
  { label: "Order History" },
  { label: "Payment details" },
  { label: "Customization" },
];

export const Default = () => <SidebarMenu items={menuItems} selected="Dashboard" />;
