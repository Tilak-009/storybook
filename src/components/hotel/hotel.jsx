import React from "react";
import { FaRegSave, FaSave } from "react-icons/fa";
import "./hotel.css";
import subimg from "./images/bg-small.jpg"

function Managment(){

    return(
        <div className="mainbox">
        <div style={{
            border:"1px solid black",
            width:"700px",
            height:"1200px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            

        }}> 
        
          <div className="subbox">
        <div style={{
            border:"1px solid black",
            width:"550px",
            height:"1100px",
            borderRadius:"50px",

        }}>
            <div className="subin">
             <div style={{
            border:"1px solid black",
            width:"550px",
            height:"350px",
            borderRadius:"50px",
            
            
        }}>
            
            <div className="profile">
            <div className="prof">
            <div style={{
            border:"1px solid black",
            width:"50px",
            height:"50px",
            borderRadius:"50px",
            // position:"absolute",
            // left:"15px",
            // top:"50px",
            

        }}>
           
            </div>
            </div>
             
            <h3 className="name"> john abraham</h3>
            <FaRegSave className="saved"/>
            </div>

        </div>
        </div>

        </div>
        </div>

        </div>
        </div>

    )
}

export default Managment;