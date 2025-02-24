import React from "react";
import "./searchbar.css";
import olx from "./images/olxp.webp"
import { FaArrowDown, FaBell, FaCaretDown, FaComment, FaHeart, FaInfo, FaSearch, FaTrash } from "react-icons/fa";


function Searchbar(){
    return(
        <div className="sbr">
<div className="logo">
    <div style={{
        width:100,
        height:85,
       
    }}>
        <div className="limg">
            <img src={olx}/>
        </div>
    </div>
</div>

<div className="nation">
<p><FaSearch className="search1"/> <b>India </b> <FaArrowDown className="Ad"/></p>
</div>
<div className="prop">
   <input type="text" placeholder="search for 'properties'"/>
   <FaSearch className="search2"/>
   
</div>

<p className="lang"><b>ENGLISH</b><FaArrowDown className="Ad2"/></p>
<p className="like"><FaHeart className="ht"/></p>
<p className="cmnt"><FaComment className="cm"/></p>
<p className="bell"><FaBell className="bl"/></p>
<p className="account">T </p>
<p className="dwn"><FaCaretDown/> </p>
<p className="sell">+SELL </p>

<div className="ac">
    <p className="cats"><b>ALL CATOGORY</b><FaCaretDown/> <b> cars</b> <b>motorcycle </b><b>mobile phones</b><b>for sale:</b><b>house & apartment</b><b>scooter</b><b>commercial &other vehicle</b><b>for rent:</b><b>house & apartment</b></p>
    
    </div>
</div>
    );
}
export default Searchbar;