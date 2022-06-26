import React,{useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {

    const getData = useSelector((state) => state.cartreducer.cartItems)
    console.log(getData)

    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
   




  return (
    <>
      <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          
          <Nav className="me-auto">
            <NavLink to = "/" className= "text-decoration-none text-light" >Home</NavLink>
            
          </Nav>
          <NavLink to="/Cart" className= "text-decoration-none"><Badge badgeContent={getData.length} color="primary"
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
          >
          <i class="fa-solid fa-cart-shopping text-light" style= {{fontSize:25,cursor:"pointer"}} ></i>
          </Badge></NavLink>
         
        </Container>

      </Navbar>
    </>

  );
};

export default Header;
