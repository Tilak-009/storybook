
import React from "react";
import "./menu.css";
import stear from "./images/jsw.jpg"
import shoe1 from "./images/shoe1.jpg"
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
            <div className="imgbx1">

            <div style={{
                 border:"1px solid black",
                width:230,
                height:150,
                paddingTop:"5px ",
                
        }}> 
            </div>
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
            <div className="imgbx2">

            <div style={{
                 border:"1px solid black",
                width:230,
                height:150,
                paddingTop:"5px "
        }}>
            </div>
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
            <div className="imgbx3">

            <div style={{
                 border:"1px solid black",
                width:230,
                height:150,
                paddingTop:"5px "
        }}>
        </div>
</div>
</div>
</div> <div className="bltu">
        <div style={{
            border:"1px solid black",
            width:250,
            height:400,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
        }}>
            <div className="imgbx3">

            <div style={{
                 border:"1px solid black",
                width:230,
                height:150,
                paddingTop:"5px "
        }}>
        </div>
        </div>
        </div></div>
</div>
    );
}

export default Menu