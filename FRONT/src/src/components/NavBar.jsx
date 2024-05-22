<<<<<<< HEAD
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import { ShoppingCart } from "phosphor-react";
import "../styles/NavBar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       <div>  <Link to="/"><img src={Logo} alt="logo"/></Link></div>
        <div className="hiddenLinks">
    <Link to="/"> Home </Link>
        <Link to="/Shop"> Shop </Link>
        <Link to="/login"> Login </Link>
      <Link to="/cart">
           <ShoppingCart size={25}/>
         </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        </div>
      </div>
      <div className="rightSide">
  <div className="links">
    <Link to="/"> Home </Link>
        <Link to="/Shop"> Shop </Link>
        <Link to="/login"> Login </Link>
     <Link to="/cart"><ShoppingCart size={25}/>
         </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


=======
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import { ShoppingCart } from "phosphor-react";
import "../styles/NavBar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       <div>  <Link to="/"><img src={Logo} alt="logo"/></Link></div>
        <div className="hiddenLinks">
    <Link to="/"> Home </Link>
        <Link to="/Shop"> Shop </Link>
        <Link to="/login"> Login </Link>
      <Link to="/cart">
           <ShoppingCart size={25}/>
         </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        </div>
      </div>
      <div className="rightSide">
  <div className="links">
    <Link to="/"> Home </Link>
        <Link to="/Shop"> Shop </Link>
        <Link to="/login"> Login </Link>
     <Link to="/cart"><ShoppingCart size={25}/>
         </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
