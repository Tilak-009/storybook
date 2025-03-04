import React from "react"; 
import { FaFacebook ,FaEllipsisH,FaBars, FaArrowDown, FaCaretDown, FaSearch, FaCaretLeft, FaArrowRight} from 'react-icons/fa';
import "./hotel1.css"
import dish from "./images/dish2.jpg"

function Hotelmanagment(){
    return(
        <div className="hotelmenu">

            <div className="2main">
                   <div style={{
                    display:"flex",
                    flexDirection:"row",
            border:"1px solid black",
            height:"750px",
            width:"1300px",
            borderRadius:"30px",
            backgroundColor:"white"
            }}>   
            
            {/* myleft */}
              <div style={{
                border:"1px solid black",
                height:"740px",
                width:"750px",
                borderRadius:"30px",
                // borderLeftColor:"white",
                borderRightColor:"white"}}>
                
               <div className="header">
                     <FaBars className="bari"/> <b>125  estern costume St. <FaCaretDown className="down"/></b>
                     
                     <input type="text" placeholder="What would you want eat today?" style={{borderRadius:10 , display:"flex",textAlign:"center" }} className="sin" /><FaSearch className="search"/>
                     </div>

                     <div className="decor">
                        <b>You Don't Need a Silver<br/>
                        fork to Eat good food</b><br/>
                        <div className="lm"><i className="lemo">learn more </i><FaArrowRight className="rit" /></div>
                        <div className="imgcircle"
                             style={{
                                border:"1px solid green",
                                borderRadius:"100px",
                                width:230,
                                height:220,
                                position:"absolute",
                                right:120,
                                bottom:40,
                                boxShadow: "5px 10px 5px 10px rgba(0, 0, 0, 0.2)",
                                boxShadow: "10px 5px 10px 5px rgba(0, 0, 0, 0.2)",
                               

                                
                            }}> 
                            <img src={dish} />
                            </div>
                        </div>
                     </div>
                    </div>   
                
                
                
                {/* myright */}
                 <div style={{
                    border:"1px solid black",
                    height:"740px",
                    width:"340px",
                    borderRadius:"30px",}}>
                        </div>
                        </div>
                        </div>


    )
}

export default Hotelmanagment;