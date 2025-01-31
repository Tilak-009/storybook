import React from "react";
import SidebarMenu from "./sidebar";
import "./sidebar.css";
import { FaHome, FaUtensils, FaComments, FaEnvelope, FaHistory, FaCreditCard, FaSlidersH } from "react-icons/fa";

export default {
  title: "components/fsb/sidebar",
  component: SidebarMenu,
};
const menuItems = [
  { label: "Dashboard", icon: <FaHome /> },
  { label: "Food Order", icon: <FaUtensils /> },
  { label: "Feedback", icon: <FaComments /> },
  { label: "Message", icon: <FaEnvelope /> },
  { label: "Order History", icon: <FaHistory /> },
  { label: "Payment details", icon: <FaCreditCard /> },
  { label: "Customization", icon: <FaSlidersH /> },
  
];

export const Default = () => <SidebarMenu items={menuItems} selected="Dashboard" />;
