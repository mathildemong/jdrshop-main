<<<<<<< HEAD
import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/fond.jpg';
import '../styles/Home.css';
import Logo from "../assets/logo.png";

function Home() {

  return (
  
<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
<div className="headerContainer">
<div>  <Link to="/"><img src={Logo} alt="logo"/></Link></div>
        <p>Bienvenue dans notre univers</p>
        <Link to='/shop'>
        <button>order now</button>
        </Link>
        </div>
        </div>
  )
}

=======
import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/fond.jpg';
import '../styles/Home.css';
import Logo from "../assets/logo.png";

function Home() {

  return (
  
<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
<div className="headerContainer">
<div>  <Link to="/"><img src={Logo} alt="logo"/></Link></div>
        <p>Bienvenue dans notre univers</p>
        <Link to='/shop'>
        <button>order now</button>
        </Link>
        </div>
        </div>
  )
}

>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
export default Home;