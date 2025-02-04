import { useState } from "react";
import { FaInfo, FaSearch } from "react-icons/fa";
import "./dashboard.css";


function Fdashboard(){

    const [search,setsearch]=useState("")
    const handleSearch=(e)=>{
setsearch(e.target.value.toLowerCase())
    }

      const customerName = "Emir Abiyyu";
      const [tableSize,settableSize] =useState(0);

      const increamenttabele=()=>{
        settableSize(tableSize+1);
      }
    const decreamenttable=()=>{
        settableSize(tableSize-1)
    }
      const orders = [
        { name: "Japanese Chicken Gyoza", price: 81700,  },
        { name: "2pcs of Amazing Avocado", price: 68000,  },
        { name: "Healthy Kids Meal", price: 85000,  },
        { name: "Krosang That’s it", price: 0,},
      ];
    
      const subtotal = 1280000;
      const discount = 0;
      const total = subtotal - discount;
    
      return (

        <div className="f-dash"> 
        <div className="s-bar">
          <div className="input">
        <input 
        type="text"
        onChange={handleSearch}
        value={search}
      

        /></div>

          
           
        <div className="icons">
          <FaSearch className="s-icon"/></div>
          </div>
           <div className="onlineshop">
          {/* Customer Info */}
          <div 
                style={{
                  width: '700px',
                  height: '1300px',
                  backgroundColor: 'white',
                  border: '5px solid #ccc',
                  borderRadius:30
      
          
          }}>
          <div className="customer">
      
            <h2 className="ci">Customer Information <FaInfo className="info"/></h2>
            <div
             style={{
              
                width: '650px',
                height: '70px',
                backgroundColor: '#ccc',
                border: '2px solid white',
                borderRadius:15,
    
        
        
        }}>
            <p className="cn"><strong>Customer name:</strong> {customerName}</p>
         </div>
            <div className="nop"></div>
           <div
           
           style={{
              width: '650px',
              height: '80px',
              backgroundColor: '#ccc',
              border: '2px solid white',
              borderRadius:15,
  
      
      
      }}><div className="np">
               <i> Number of persons: </i>
</div>
              <div className="nop">
               <div className="btn">
                <b>{tableSize} Number of persons</b>
             </div>
             <div className="btn1">
             <button  onClick={decreamenttable}> - </button>
               {tableSize}
             <button onClick={increamenttabele}> + </button>
               </div>
             </div>
             </div>
           
          </div>
         
    
          {/* Current Order */}
          <div className="orders">
            <h2 className="co">Current Order</h2>
            <ul>
              <div className="list">
              <div 
              style={{
                backgroundColor:"#ccc",
                width:"600px",
                height:"500px",     
                border:"1px solid black",
                borderRadius:30,
                padding:"30px"
              }}>
              {orders.map((order, index) => (
                <li key={index} className="item1">
                  <span className="item2">
                    <span className="text">{order.image}</span>
                    <span>{order.name}</span>
                  </span>
                  <span className="font">Rp {order.price.toLocaleString()}</span>
                </li>
              ))}
              </div></div>
            </ul>
            
    
          </div>
          {/* Payment Summary */}
          <div className="payment">
            <h2 className="ps">Payment Summary</h2>
            <p className="s-total"><span>Subtotal:</span> <span>Rp {subtotal.toLocaleString()}</span></p>
            <p className="d-sale"><span>Discount sales:</span> <span>Rp {discount.toLocaleString()}</span></p>
            <p className="total">
              <span>Total:</span> <span>Rp {total.toLocaleString()}</span>
            </p>
          </div>
    
          {/* Order Button */}
          <button className="o-btn">
            Order Now
          </button>
        </div>
        </div>  
        </div> 
      );
    };
    

export default Fdashboard;