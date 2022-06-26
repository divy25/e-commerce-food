import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DLT } from "../redux/actions/action";
import Table from "react-bootstrap/esm/Table";
import {DECR} from "../redux/actions/action";
import { ADD } from "../redux/actions/action";



const Cart = () => {

   const getData = useSelector((state) => state.cartreducer.cartItems);

  console.log(getData[0]);
  
   


   const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  



const decrement = (item) => {
  dispatch(DECR(item))
}

  const increment = (item) => {
    dispatch(ADD(item))
  }

 

  const dlt = (item ) => {
    dispatch(DLT(item));
  };

  const total = () => {
    let price = 0;
    getData.map((ele) => {
      price = ((ele.price)*(ele.quantity)) + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total()
    
  }, [total]);

  return (
    <>
      {getData.length ? (
        <>
        <div style={{margin:"auto",textAlign:"center"}}><h1>Buy Now</h1></div>
        <div
          className="card_details display-flex  align-items-center "
          style={{ width:"55%" , padding: 100,margin:"auto"}
          }
        >
          <Table className="d-flex flex-column ">
            <thead>
              <tr style={{display:"flex"}}>
                <th style={{fontSize:"20px"}}>Photo</th>
                <th style={{marginLeft:"15rem",fontSize:"20px"}}>Item</th>
              </tr>
            </thead>
            <tbody>
              {getData.map((e) => {
                return (
                  <div style={{marginBottom:"2%",boxShadow:"rgba(0, 0, 0, 0.25) 0px 25px 50px ",borderRadius:"1rem"}}>
                    <tr style={{display:"flex",flexWrap:"wrap",gap:"20px", border:"none"}}>
                      <td style={{width:"35%"}}>
                        <img
                          src={e.filename}
                          style={{ width: "10rem",height:"11rem"}}
                          alt=""
                        ></img>
                      </td>
                      <td style={{width:"40%"}}>
                        <p><strong>{e.title}</strong></p>
                        <p> <strong>Price:</strong> ₹{e.price}</p>
                        <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{e.rating} ★	</span></p>
                              <div
                            className="mt-2 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                              
                            }}
                          > 
                            <button type="button" class="btn btn-dark" onClick={()=>{decrement(e)}} style={{ fontSize: "14" }}>-</button>
                            <span style={{ fontSize: "22" }}>{e.quantity}</span>
                            <button type="button" class="btn btn-dark" onClick={()=>{increment(e)}} style={{ fontSize: "14" }}>+</button>
                          </div>
                      
                        <p
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => dlt(e)}
                        >
                          <i className="fas fa-trash smalltrash"></i>
                        </p>
                      </td>
                      <td 
                        className="mt-5 "
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                          width:"10%"
                        }}
                        onClick={() => dlt(e)}
                      >
                        <i className="fas fa-trash largetrash"></i>
                      </td>
                    </tr>
                     
                 </div>
                );
              })}

              <hr style={{border:"1px solid black"}}></hr>
              <h4  className="text-center">Total: ₹ {price.toFixed(2)}</h4>
            </tbody>
          </Table>
        </div>
       </>
      ) : (
        <div className="cart_details d-flex " style={{margin:"auto", textAlign:"center",marginTop:"10%"}}>
          <div className="container py-4 ">
            <div className=" justify-content-center align-items-center">
              <h3>Your Cart is Empty</h3>
              <div>
                <img
                  src="./cart.png"
                  className="emptycart_img"
                  alt=""
                  style={{ width: "5rem", padding: 10 }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
