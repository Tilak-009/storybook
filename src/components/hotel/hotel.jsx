import React from "react";
import { FaRegSave, FaSave } from "react-icons/fa";
import "./hotel.css";
import logo from "./images/logo.jpeg";
import main from "./images/mainbg.webp"

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
            backgroundImage: `url(${main})`,

            

        }}> 
        
          <div className="subbox">
        <div style={{
            border:"1px solid black",
            width:"550px",
            height:"1100px",
            borderRadius:"50px",
            backgroundColor:'white'

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
            backgroundImage:`url(${logo})`
            

        }}>
           
            </div>
            </div>
             
            <p><h3 className="name"> john abraham</h3>
            <FaRegSave className="saved"/>
            <br/>hotel guest</p>

            
            </div>
            <div className="reco">recomanded for you</div>
            <div className="content">
            <div style={{
                border:"1px solid black"
            }}>
            </div>
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