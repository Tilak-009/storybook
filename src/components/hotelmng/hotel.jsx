import React, { useState } from "react"; 
import { FaFacebook ,FaEllipsisH,FaBars, FaArrowDown, FaCaretDown, FaSearch, FaCaretLeft, FaArrowRight, FaUtensils, FaHamburger, FaPizzaSlice, FaPastafarianism, FaPaste, FaUtensilSpoon, FaFish, FaDrumstickBite, FaCuttlefish, FaTimes, FaTimesCircle, FaClock, FaInfoCircle, FaHome, FaBox, FaSave} from 'react-icons/fa';
import "./hotel1.css"
import dish from "./images/dish3.jpg"
import dish1 from "./images/dish4.jpg"


function Hotelmanagment(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    return(
        <div className="hotelmenu">

            <div className="2main">
                   <div style={{
                    display:"flex",
                    flexDirection:"row",
            border:"1px solid black",
            height:"1050px",
            width:"1220px",
            borderRadius:"30px",
            backgroundColor:"white",
            
            }}>   
            
            {/* myleft */}
              <div style={{
                height:"1050px",
                width:"900px",
               
                // borderLeftColor:"white",
                borderRightColor:"white",
                display:"flex"}}>
                
               <div className="header">
                     <FaBars className="bari"/> <b>125  estern costume St. <FaCaretDown className="down"/></b>
                     
                     <input type="text" placeholder="What would you want eat today?" style={{borderRadius:10 , display:"flex",textAlign:"center" }} className="sin" /><FaSearch className="search"/>
                     </div>

                     <div className="decor">
                        <h1>You Don't Need a Silver<br/>
                        fork to Eat good food</h1><br/>
                        
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
                            <img src={dish1} />
                            </div>
                        </div>
                        <div className="dot6"><FaEllipsisH size={30}/> <FaEllipsisH size={30}/> </div>
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
                                <b className="bxs">   <FaBox className="bx"/>asian</b>
                              </p>


                        </div>






                        <div className="imgbxs">
                            <div className="imgbx1" style={{
                              
                                width:150,
                                height:210
                            }}> <div className="img1"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc1"><FaClock/><i>15 min</i>  <FaInfoCircle className="i1"/> <FaInfoCircle className="i2"/></p></b><br/>
                            <p className="home1"><FaHome/><i>$3.45 free delivery</i></p>

                            </div>





                        
                       
                            <div className="imgbx2" style={{
                              
                                width:150,
                                height:210
                            }}> <div className="img2"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc2"><FaClock/><i>15 min</i>  <FaInfoCircle className="info1"/> <FaInfoCircle className="info2"/></p></b><br/>
                            <p className="home2"><FaHome/><i>$3.45 free delivery</i></p>

                            </div>  







                            <div className="imgbx3" style={{
                                
                                width:150,
                                height:210
                            }}> <div className="img3"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc3"><FaClock/><i>15 min</i>  <FaInfoCircle className="info3"/> <FaInfoCircle className="info4"/></p></b><br/>
                            <p className="home3"><FaHome/><i>$3.45 free delivery</i></p>



                            </div> 

                            <div className="imgbx4" style={{
                               
                                width:150,
                                height:210
                            }}> <div className="img4"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc4"><FaClock/><i>15 min</i>  <FaInfoCircle className="info5"/> <FaInfoCircle className="info6"/></p></b><br/>
                            <p className="home4"><FaHome/><i>$3.45 free delivery</i></p>

                                </div>




                                
                                <div className="imgbx5" style={{
                               
                                width:150,
                                height:210
                            }}> <div className="img5"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc5"><FaClock/><i>15 min</i>  <FaInfoCircle className="info7"/> <FaInfoCircle className="info8"/></p></b><br/>
                            <p className="home5"><FaHome/><i>$3.45 free delivery</i></p>

                                </div>
                                
                                <br/>

                            <div className="lowercat">
                                <div className="imgbx6" style={{
                               
                                width:150,
                                height:210
                            }}> <div className="img6"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc6"><FaClock/><i>15 min</i>  <FaInfoCircle className="info7"/> <FaInfoCircle className="info8"/></p></b><br/>
                            <p className="home6"><FaHome/><i>$3.45 free delivery</i></p>

                                </div>






                                <div className="imgbx7" style={{
                                
                                width:150,
                                height:210
                            }}> <div className="img7"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc7"><FaClock/><i>15 min</i>  <FaInfoCircle className="info7"/> <FaInfoCircle className="info8"/></p></b><br/>
                            <p className="home7"><FaHome/><i>$3.45 free delivery</i></p>

                                </div>


                                <div className="imgbx8" style={{
                                
                                width:150,
                                height:210
                            }}> <div className="img8"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc8"><FaClock/><i>15 min</i>  <FaInfoCircle className="info7"/> <FaInfoCircle className="info8"/></p></b><br/>
                            <p className="home8"><FaHome/><i>$3.45 free delivery</i></p>

                                </div>




                                
                                <div className="imgbx9" style={{
                                
                                width:150,
                                height:210
                            }}> <div className="img9"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc9"><FaClock/><i>15 min</i>  <FaInfoCircle className="info7"/> <FaInfoCircle className="info8"/></p></b><br/>
                            <p className="home9"><FaHome/><i>$3.45 free delivery</i></p>

                                </div>



                                <div className="imgbx10" style={{
                                
                                width:150,
                                height:210
                            }}> <div className="img10"><img src={dish}/></div> <b>Restaurent Name<br/>
                            <p className="imgdsc10"><FaClock/><i>15 min</i>  <FaInfoCircle className="info7"/> <FaInfoCircle className="info8"/></p></b><br/>
                            <p className="home10"><FaHome/><i>$3.45 free delivery</i></p>

                                </div>


                                </div>

                        </div>
                    </div>   
                
                
                
                {/* myright */}
                 <div  className="rblock" style={{
                    borderTopRightRadius:"30px",
                    borderBottomRightRadius:"30px",
                    height:"1050px",
                    width:"350px",
                
                    
                  }}>

<div className="orders">
                    <h3 className="mo">My Order</h3>
<div className="orderty">
<div className="type1" style={{
   
    width:"320px",
    height:"70px"

}}>
    <div className="oib1" style={{
        height:70,
        width:320
    }}>
<div className="oi1">
        <img src={dish1} 
        style={ 
            {height:70,
            width:100}
            }/>
            </div>
            <div className="order1">
                <p>
                <b>Sushi set A</b>  $79.99
            </p>
                <br/>
            <div className="obt1">
     
      <button onClick={() => setCount1(count1 - 1)}>-</button>
      <h5>{count1}</h5>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <FaSave className="sv"/>
    </div>
   
            </div>
    </div>

</div>

<div className="type2" style={{
 
    width:"320px",
    height:"70px"

}}>
    <div className="oib2" style={{
        height:70,
        width:320
    }}>
<div className="oi2">
        <img src={dish1} 
        style={ 
            {height:70,
            width:100}
            }/>
            </div>
            <div className="order2">
                <p>
                <b>Sushi set B</b>  $39.50
            </p>
                <br/>
            <div className="obt2">
     
      <button onClick={() => setCount2(count2 - 1)}>-</button>
      <h5>{count2}</h5>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <FaSave className="sv"/>
    </div>
   
            </div>
    </div>

</div>




<div className="type3" style={{
 
    width:"320px",
    height:"70px"

}}>
    <div className="oib3" style={{
        height:70,
        width:320
    }}>
<div className="oi3">
        <img src={dish1} 
        style={ 
            {height:70,
            width:100}
            }/>
            </div>
            <div className="order3">
                <p>
                <b>Origial Bread</b>  $2.99
            </p>
                <br/>
            <div className="obt3">
     
      <button onClick={() => setCount3(count3 - 1)}>-</button>
      <h5>{count3}</h5>
      <button onClick={() => setCount3(count3 + 1)}>+</button>
      <FaSave className="sv"/>
    </div>
   
            </div>
    </div>

</div>




<div className="type4" style={{
    
    width:"320px",
    height:"70px"

}}>
    <div className="oib4" style={{
        height:70,
        width:320
    }}>
<div className="oi4">
        <img src={dish1} 
        style={ 
            {height:70,
            width:100}
            }/>
            </div>
            <div className="order4">
                <p>
                <b>Origial Bread</b>  $2.99
            </p>
                <br/>
            <div className="obt4">
     
      <button onClick={() => setCount4(count4 - 1)}>-</button>
      <h5>{count4}</h5>
      <button onClick={() => setCount4(count4 + 1)}>+</button>
      <FaSave className="sv"/>
    </div>
   
            </div>
    </div>



</div>

<div className="coupen" style={{
    
    width:"320px",
    height:"70px",
  

}}> <p>You have Three Coupens <b>Use Now</b></p></div>


<div className="bill">
    <div  style={{
    border:"2px solid black ",
    width:"320px",
    
}}>

</div>
   <div className="subt"> <b>sub total</b> <p>$259.59</p></div>
   <div className="df"> <b>delivery fee </b>  <p>$5.20</p></div>
   <div className="tax"> <b>taxes </b><p>$39.20</p></div>

   <div  style={{
    border:"2px solid black ",
    width:"320px",}}></div>

    <div className="total"><h2 className="tot">total </h2><h2 className="totp">$395.40</h2></div>
   </div>

   
</div>

     


                        
                        </div>
                        </div></div>
                        </div>
                        </div>
    )
}

export default Hotelmanagment;