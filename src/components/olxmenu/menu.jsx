
import React from "react";
import "./menu.css";
// import stear from "./images/jsw.jpg"
// import shoe1 from "./images/shoe1.jpg"
import str from "./images/stear.jpeg"
import bed from "./images/bed.jpeg"
import blt from "./images/blt.webp"
import smr from "./images/smr.jpeg"
import { FaHeart } from "react-icons/fa";

function Menu(){
    return(
        <div className="menubar">
<div className="menub">
    <p className="fr">Fresh recomandation</p>
</div>

<div className="bds">
        <div style={{
            border:"1px solid black",
            width:250,
            height:400,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
        }}>
            
            <div style={{
                width:230,
                height:150,
                paddingTop:"5px ",
                
                
        }}> 
            <img src={bed} />
        </div>
        </div>
</div>

<div className="stear">
        <div style={{
            border:"1px solid black",
            width:250,
            height:400,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
        }}>
            

            <div style={{
                width:230,
                height:150,
                paddingTop:"5px "
        }}><img src={str}/>
            
        </div>
        </div>
     
            </div>
            <div className="bltu">
        <div style={{
            border:"1px solid black",
            width:250,
            height:400,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
        }}>
            

            <div style={{
            
                width:230,
                height:150,
                paddingTop:"5px "
        }}>
       <img src={blt} />
</div>
</div>
</div> 
<div className="smart">
        <div style={{
            border:"1px solid black",
            width:250,
            height:400,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
            top:"120px"
        }}>
           

            <div style={{
                
                width:230,
                height:150,
                paddingTop:"5px ",
                position:"absolute",
                
        }}> 
        <img src={smr} />
       
        </div>
       
        </div>
        </div></div>

    );
}

export default Menu