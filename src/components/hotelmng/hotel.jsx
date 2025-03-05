import React from "react"; 
import { FaFacebook ,FaEllipsisH,FaBars, FaArrowDown, FaCaretDown, FaSearch, FaCaretLeft, FaArrowRight, FaUtensils, FaHamburger, FaPizzaSlice, FaPastafarianism, FaPaste, FaUtensilSpoon, FaFish, FaDrumstickBite, FaCuttlefish, FaTimes, FaTimesCircle, FaClock, FaInfoCircle, FaHome} from 'react-icons/fa';
import "./hotel1.css"
import dish from "./images/dish.jpg"

function Hotelmanagment(){
    return(
        <div className="hotelmenu">

            <div className="2main">
                   <div style={{
                    display:"flex",
                    flexDirection:"row",
            border:"1px solid black",
            height:"1500px",
            width:"1080px",
            borderRadius:"30px",
            backgroundColor:"white",
            
            }}>   
            
            {/* myleft */}
              <div style={{
                border:"1px solid black",
                height:"1500px",
                width:"750px",
                borderRadius:"30px",
                // borderLeftColor:"white",
                borderRightColor:"white",
                display:"flex"}}>
                
               <div className="header">
                     <FaBars className="bari"/> <b>125  estern costume St. <FaCaretDown className="down"/></b>
                     
                     <input type="text" placeholder="What would you want eat today?" style={{borderRadius:10 , display:"flex",textAlign:"center" }} className="sin" /><FaSearch className="search"/>
                     </div>

                     <div className="decor">
                        <b>You Don't Need a Silver<br/>
                        fork to Eat good food</b><br/>
                        <FaEllipsisH/>
                        <div className="lm"><i className="lemo">learn more </i><FaArrowRight className="rit" /></div>
                        <div className="imgcircle"
                             style={{
                                border:"1px solid green",
                                borderRadius:"100px",
                                width:240,
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

                        <div className="dishc">
                            <b>Choose from different Catogories</b><br/>
                            <p className="cato">
                               
                                <b className="ball"><FaUtensils className="All" />All </b>
                                <b className="bbg"> <FaHamburger className="burger"/> burger</b>
                                <b className="bpz"><FaPizzaSlice className="pizza"/>pizza</b>
                                <b className="bps"><FaUtensilSpoon className="pasta"/>pasta</b>
                                <b className="bfs"> <FaFish className="fish"/>Fish</b> 
                                <b className="bck"><FaDrumstickBite  className="chicken"/>chicken</b>
                                <b className="bbf">   <FaCuttlefish className="beef"/>beef</b>
                              </p>


                        </div>






                        <div className="imgbxs">
                            <div className="imgbx1" style={{
                                border:"1px solid black",
                                width:150,
                                height:250
                            }}> <div className="img1"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc1"><FaClock/><i>15 min</i>  <FaInfoCircle className="i1"/> <FaInfoCircle className="i2"/></p></b><br/>
                            <p className="home1"><FaHome/><i>$3.45 free delivery</i></p>

                            </div>





                        
                       
                            <div className="imgbx2" style={{
                                border:"1px solid black",
                                width:150,
                                height:250
                            }}> <div className="img2"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc2"><FaClock/><i>15 min</i>  <FaInfoCircle className="info1"/> <FaInfoCircle className="info2"/></p></b><br/>
                            <p className="home2"><FaHome/><i>$3.45 free delivery</i></p>

                            </div>  







                            <div className="imgbx3" style={{
                                border:"1px solid black",
                                width:150,
                                height:250
                            }}> <div className="img3"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc3"><FaClock/><i>15 min</i>  <FaInfoCircle className="info3"/> <FaInfoCircle className="info4"/></p></b><br/>
                            <p className="home3"><FaHome/><i>$3.45 free delivery</i></p>








                            <div className="imgbx4" style={{
                                border:"1px solid black",
                                width:150,
                                height:250
                            }}> <div className="img4"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc4"><FaClock/><i>15 min</i>  <FaInfoCircle className="info5"/> <FaInfoCircle className="info6"/></p></b><br/>
                            <p className="home4"><FaHome/><i>$3.45 free delivery</i></p>

                                </div>
                            </div> 

                        </div>
                    </div>   
                
                
                
                {/* myright */}
                 <div style={{
                    border:"1px solid black",
                    height:"1500px",
                    width:"340px",
                    borderRadius:"30px",}}>
                        </div>
                        </div>
                        </div></div>


    )
}

export default Hotelmanagment;