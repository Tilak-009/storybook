import React, { useState } from "react";
import "./signup.css"
import {FaEye, FaEyeSlash, FaFacebook, FaKey, FaLock, FaPersonBooth, FaRegEyeSlash, FaUser} from 'react-icons/fa';
import background from "./images/bg5.png"

function Signup(){

    const[eyeOpen,seteyeOpen]=useState(false)
    const[password,setpassword]=useState("")
    const [isChecked, setIsChecked] = useState(false);
      
        const handleCheck = () => {
          setIsChecked(!isChecked);
        };
      
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
    border:"5px solid black",
    width:522,
    height:1000,
    display:"flex",
    borderRadius:30,
    justifyContent:"center",
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
}}>
<div className="logobg" style={{
// border:"1px solid black",
    width:520,
    height:300,
    display:"flex",
    justifyContent:"center",
    borderRadius:20,
    borderBottom:"none"
    
    }}>

        <div className="imgbx">
        <img src={background} style={{
          width:530,
          height:300,
          borderRadius:26
         
        }}/>
        </div>

<div className="details" style={{
  
    width:520,
    height:750,
    position:"absolute",
    top:250,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    backgroundColor:"white",
    borderBottom:"none",
    
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
  
    </div>  <br/>
   <div className="checkbx" >
   <input type="checkbox" 
   style={{
    position:"absolute",
    top:170,
    width:25,
    right:100,
    
    
   }}/> 
    </div>
    <div className="ksi">Keep Sign In</div>
    <div className="forgtpass">Forgot password?</div>
    <div className="dhaccount">Dont't have an account?</div>
    <div className="create"><button> <h2>CREATE AN ACCOUNT</h2></button></div>
</div>



  
</div>

</div>


</div>

</div>


</div>
    );
}

export default Signup