
import React from 'react'
import './Footer.css'
import { Link, withRouter } from 'react-router-dom'

const Footer = (props) => {
  return(
      <div className="footerHead">
   <div className="footer">
 <div className="footer1">
   <h3><span style={{color:"yellow"}}>Ge</span><span className="container1">tRightProperty</span> </h3>
   <p className="CommonFamily">Find your dream home here!</p>
   {/* <Link to="/About" style={{ color: 'white' }} activeStyle={{ color: 'red' }}>Read More </Link> */}
   </div>
   <div className="footer2">
   <h3 className="CommonFamily">Contact Us</h3>
   <div className="footer20">
   <p className="CommonFamily">Find your dream home here!</p>
   {/* <Link to="/Contact" style={{ color: 'white' }} activeStyle={{ color: 'red' }}>Contact Us</Link> */}
   </div>
   </div>
   <div className="footer3">
   <h3 className="CommonFamily">Newsletter Subscribe</h3>
   <p className="CommonFamily">Find your dream home here!</p>
   </div>
   </div>
   <div className="footer4">
     <div className="footer5 CommonFamily"><p>&copy; Get right property 2020 All Rights Reserved</p></div>
   </div>
   </div>
  );
}
export default Footer;
