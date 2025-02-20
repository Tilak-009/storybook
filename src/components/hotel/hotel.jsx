import React from "react";
import { FaBlog, FaRegSave, FaSave } from "react-icons/fa";
import "./hotel.css";
import logo from "./images/logo.jpeg";
import main from "./images/mainbg.webp"
import bed from "./images/bgg.jpg"
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
            position:"relative",
            // left:"15px",
            // top:"50px",
            backgroundImage:`url(${logo})`,
            
            

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
                border:"1px solid black",
                width:450,
                height:100,
                borderRadius:30,
                // position:"absolute",
                // right:200,
                display:"flex",
                // justifyContent:"center",
                alignItems:"center",
                backgroundColor:"white"
                
                
            }}>
                
                 
                <div style={{border:"1px solid black",
                width:130,
                height:100,
                borderRadius:30,
                backgroundImage: `url(${bed})`,
                }}>
                    
                   
  </div>
                 
  <div style={{
                width:320,
                height:100,
                backgroundColor:"white",
                borderRadius:30,
                
                
                
                }}>

                    <p className="dsrc"><b> some me on time</b><br/>
                    <>relax with your massages and<br/>
                     treatments</><br/>
                     <i> spaa fecilities closed at 4.00pm</i></p>
                   
  </div>   

                
            </div>
            </div>
        </div>
        </div>
<div className="mcontent">
<p><b className="p-s">popular experiences</b></p>
</div>
<div className="exp" style={{ display: 'flex', flexDirection: 'row',gap:8 }}>


<div className="mcbox1" style={{
    border:"2px solid green",
    borderRadius:"15px",
    width:170,
    height:60,
    display:"flex",
    flexDirection:"row"

}}>

   <div  style={{
    border:"1px solid green",
    borderRadius:"15px",
    width:60,
    height:60,
    backgroundImage:`url(${bed})`
}}></div>
 <div style={{
   
   
    height:60,
    width:110,
 
 }}><p className="mdsc1"><b>bike riding</b>
 <br/><i>voried tour option</i></p>
 </div>
</div>





<div className="mcbox2" style={{
    border:"2px solid green",
    borderRadius:"15px",
    width:170,
    height:60,
    display:"flex",
    flexDirection:"row"
}}>
   <div  style={{
    border:"1px solid green",
    borderRadius:"15px",
    width:60,
    height:60,
    backgroundImage:`url(${bed})`
}}></div>
 <div style={{
    
    
    height:60,
    width:110,
    
 }}><p className="mdsc2"><b>dinner at table</b>
 <br/><i>from $30/person</i></p></div></div>





<div className="mcbox3" style={{
    border:"2px solid green",
    borderRadius:"15px",
    width:170,
    height:60,
     display:"flex",
    flexDirection:"row"
}}>
   <div  style={{
    border:"1px solid green",
    borderRadius:"15px",
    width:60,
    height:60,
    backgroundImage:`url(${bed})`
}}></div> 
<div style={{
   
    height:60,
    width:110,
    
 }}><p className="mdsc3"><b>boating fecilities</b>
 <br/><i>from $10/person</i></p></div></div>
        </div>
        
        </div>


        </div>

        
        </div>
</div>
    )
}

export default Managment;