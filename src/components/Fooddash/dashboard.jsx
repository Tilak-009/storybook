import { useState } from "react";
import { FaInfo, FaSearch, FaTrash } from "react-icons/fa";
import "./dashboard.css";
import chicken from"./images/chicken.jpeg"
import avacoda from "./images/avacoda.jpeg"
import kid from "./images/kid.jpg"
import that from "./images/that.jpg"

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

// chicken
    const [chickenSize,setchickensize] =useState(0);

    const increamentchicken=()=>{
      setchickensize(chickenSize+1);
    }
  const decreamentchicken=()=>{
    setchickensize(chickenSize-1)}
// avacoda
    const [avacodaSize,setavacodasize] =useState(0);

    const increamentavacoda=()=>{
      setavacodasize(avacodaSize+1);
    }
  const decreamentavacoda=()=>{
    setavacodasize(avacodaSize-1)}


    // kid

    const [kidSize,setkidsize] =useState(0);

    const increamentkid=()=>{
      setkidsize(kidSize+1);
    }
  const decreamentkid=()=>{
    setkidsize(kidSize-1)}
    

    const orders = [
    
      {
        name: "Japanese Chicken Gyoza",
        price: 81700,
        
      },
      {
        name: "2pcs of Amazing Avocado",
        price: 68000,
        image:"./images/avacoda.jpeg"
      },
      {
        name: "Healthy Kids Meal",
        price: 85000,
        
      },
      {
        name: "Krosang That’s it",
        price: 0,
      
      },
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
                  height: '1600px',
                  backgroundColor: 'white',
                  border: '5px solid #ccc',
                  borderRadius:30
      
          
          }}> 
          <div className="customer">
      
            <h2 className="ci">Customer Information <FaInfo className="info"/></h2>
            <div
             style={{
              
                width: '650px',
                height: '60px',
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
                width:"650px",
                height:"800px",     
                border:"5px solid #ccc",
                borderRadius:30,
                // padding:"0px"
              }}>

              {orders.map((order, index) => (
            <li key={index} className="item1">


              
            <span className="item2">


             
              {order.image && <img src={chicken} alt={chicken} className="chicken-image" />}
               
                
              {order.image && <img src={avacoda} alt={avacoda} className="avacoda-image" />}

              
              {order.image && <img src={kid} alt={kid} className="kid-image" />}

              {order.image && <img src={that} alt={that} className="that-image" />}

            </span>
            <div className="texts">
              {/* <div className="o-btn">
      <button onClick={decreamentorder}>-</button> 
               {orderSize} 
               <button onClick={increamentorder}>+</button>  */}
              
            <div className="order-text">{order.name} </div>
             <div className="rp"> {order.price.toLocaleString()}rp</div>
            <div className="trash"><FaTrash/></div>
            
             </div>
          </li>
          
           
              ))}
              </div></div>
            </ul>
            
    
          </div>
          {/* Payment Summary */}
          <div className="payment">
            <h2 className="ps">Payment Summary</h2>
            <p className="s-total"><span><strong>Subtotal:</strong></span> <span>Rp {subtotal.toLocaleString()}</span></p>
            <p className="d-sale"><span><strong>Discount sales:</strong></span> <span>Rp {discount.toLocaleString()}</span></p>
            <p className="total">
            <div style={{
                border:"1px solid black",
                width:"950px",
                height:"1px",
                backgroundColor:"black",
                padding:"0"
                
              }}></div>
    
            </p>
          </div>
    
          {/* Order Button */}
          
            <div className="submit">
          <div className="total">
          <span><h3>Total:</h3></span> <span><h2>Rp {total.toLocaleString()}</h2></span></div>
          <div className="order-btn"><button onClick={SubmitEvent}>order</button></div>
          </div>
        </div>
        </div>  
        </div> 
      );
    };
    
export default Fdashboard;