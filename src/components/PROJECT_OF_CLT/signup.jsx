import React, { useState } from "react";
import "./signup.css"
import {FaEye, FaEyeSlash, FaFacebook, FaKey, FaLock, FaPersonBooth, FaRegEyeSlash, FaUser} from 'react-icons/fa';
import background from "./images/bg4.png"

function Signup(){

    const[eyeOpen,seteyeOpen]=useState(false)
    const[password,setpassword]=useState("")
    const handleSubmit=()=>{
        seteyeOpen(!eyeOpen);
    }
    const handlepassword=(event)=>  {
setpassword(event.target.value);
    }
    
    return(
<div className="foodie" style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}}>
<div className="main" style={{
    border:"3px solid black",
    width:522,
    height:1120,
    display:"flex",
    justifyContent:"center",
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
}}>
<div className="logobg" style={{
border:"1px solid black",
    width:520,
    height:300,
    display:"flex",
    justifyContent:"center",
    
    }}>

        <div className="imgbx">
        <img src={background} style={{
          width:520,
          height:300,
         
        }}/>
        </div>

<div className="details" style={{
    border:"1px solid black",
    borderBottom:"3px solid black",
    width:520,
    height:870,
    position:"absolute",
    top:280,
    borderRadius:50,
    backgroundColor:"white"
}}>

<div className="usercredential">

    <div className="wish">
<div  className="welcome"><h1>Welcome Back </h1></div>

<div className="welcomdsc"><p>Lorem ipsumdolor sit amet concesectur adipiscing elit,<br/>
                    sed do eismod tempor.</p></div>


</div>
</div>


<div className="inputbxs" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
   <div className="namebx">
    
         <input type={eyeOpen?"text":password} value={password} onChange={handlepassword} placeholder="Name" style={{paddingLeft:70}}/> 
         <FaUser className="user"/> 
         </div>

    <div className="passwordbx">
    
    <input type="text" placeholder="Password" style={{paddingLeft:70}}/> 
    <FaLock className="passicon"/> 
   <div className="eyeicon">{eyeOpen?( <FaEye style={{fontSize:25}} onClick={handleSubmit} />):(<FaEyeSlash style={{fontSize:25}} onClick={handleSubmit}/>)   } 

   {/* {eyeOpen?password:Array(password.length).fill("*").join("")} */}

  

   </div>
   <br/>

<div className="sbtn">
    <button> <h2>SIGN IN</h2></button>
   </div>


   </div>
</div>

</div>


</div>

</div>


</div>
    );
}

export default Signup