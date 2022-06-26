import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css" ;
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

import { toast, ToastContainer } from "react-toastify";


const Cards = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);


  const dispatch = useDispatch()

  

  
 const notify = () => {
  toast.success("Item added to Cart")
 }

 const send = (e) => {
  dispatch(ADD(e))
  notify()
}

  useEffect(() => {
    fetch(`https://api4286.s3.ap-south-1.amazonaws.com/products.json`)
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setData(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container mt-3">
        <h2 className="text-center">Buy Now</h2>

        <div className="row d-flex justify-content-center align-items-center" >
          {data.map((element, id) => (
            <>
              <Card style={{ width: "22rem", border:"none" }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={element.filename} style={{height:"16rem"}} className = "mt-3" />
                <Card.Body>
                  <Card.Title style={{height:"1.6rem" ,overflow:"hidden"}}>{element.title}</Card.Title>
                  <Card.Text>
                       <p style={{width:"18rem",height:"3rem",overflow:"hidden",textOverflow:'ellipsis'}}>{element.description}</p>
                       <p><strong>Price: </strong>₹ {element.price}</p>
                       <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{element.rating} ★	</span></p>
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                     <Button variant="primary" 
                      onClick = {()=>  {send(element)} }
                     className="col-lg-12">Add to Cart</Button>
                     <ToastContainer autoClose={200}></ToastContainer>
                  </div>
                 
                </Card.Body>
              </Card>
            </>
          ))}
        </div>
      </div>
    );
  }
};

export default Cards;
