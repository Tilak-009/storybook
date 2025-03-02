
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
            height:300,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
        }}>
            <div className="dscr1">
               <p > <b>$14,500</b> <br/>
               <i className="is">2bds - 2ba-900ft2<br/>
               Makhmalabad, nasik 422004<br/>
               <i className="mg">MAKHAMALABED GAOTHAL NASAK </i>
               </i></p>
            </div>
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
            height:300,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
        }}>
                <div className="dscr2">
               <p > <b>$2,500</b> <br/>
               <i className="is">2bds - 2ba-900ft2<br/>
               Makhmalabad, nasik 422004<br/>
               <i className="mg">MAKHAMALABED GAOTHAL NASAK </i>
               </i></p>
            </div>

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
            height:300,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
        }}>
            
            <div className="dscr3">
               <p > <b>$500</b> <br/>
               <i className="is">2bds - 2ba-900ft2<br/>
               Makhmalabad, nasik 422004<br/>
               <i className="mg">MAKHAMALABED GAOTHAL NASAK </i>
               </i></p>
            </div>

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
            height:300,
            display:"flex",
            justifyContent:"center",
            // alignItems:"center"
            top:"120px"
        }}>
              
              <div className="dscr4">
               <p > <b>$30,000</b> <br/>
               <i className="is">2bds - 2ba-900ft2<br/>
               Makhmalabad, nasik 422004<br/>
               <i className="mg">MAKHAMALABED GAOTHAL NASAK </i>
               </i></p>
            </div>

           

            <div style={{
                
                width:230,
                height:150,
                paddingTop:"5px ",
                position:"absolute",
                
        }}> 
        <img src={smr} />
       <FaHeart className="slk"/>
        </div>
       
        </div>
        </div></div>

    );
}

export default Menu