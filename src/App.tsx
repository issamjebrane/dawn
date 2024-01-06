import dawnImage from "../src/assets/dawn.png"
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

import './App.css'

function App() {
  

  return (
    <>
    <div className="container">
      <div className="image">
        <img src={dawnImage} alt="" />
      </div>
      <div className="subContainer">
        <div>
          <h1 className="title">Coming Soon</h1>
          <h6 className="subtitle">
            In the meantime, Sign up for our monthly
            newsletter to stay up to date
          </h6>
          <div className="buttons">
            <input type="text" placeholder="Email Address"/>
            <button className="signButton">Sign Up</button>
          </div>
        </div>
        <div className="links">
          <a href="https://www.instagram.com/dawn.sunglasses/">
            <FaInstagram/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555525734042">          
            <FaFacebook/>
          </a>
          <a href="mailto:contact.dawnstore@gmail.com">
            <BiLogoGmail/>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
