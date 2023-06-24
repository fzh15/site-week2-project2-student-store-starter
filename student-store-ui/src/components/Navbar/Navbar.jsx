import * as React from "react"
import "./Navbar.css"
import "../Logo/Logo"
import { BrowserRouter as Routes, Router, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
          
           <div className="topnav">
                  <div className = "logo">
                          <a href = "hyperlink for home">
                            <img src = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt = "codepath logo" ></img> </a>
       


                   </div>
                         <div className = "socials">
                                  <a href = "hyperlink for insta">
                                        <img src = "https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png" alt = "instagram logo" ></img> </a>
                                        
                                    <a href = "hyperlink for twitter">

                                        <img src = "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt = "twitter logo" ></img> </a>

                                    <a href = "hyperlink for meta">

                                        <img src = "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt = "meta logo" ></img> </a>
                         </div>

                          <ul className="links">
                                    <li> 
                                      <a href="/">Home</a>
                                    </li>

                                    <li> 
                                      <a href="/#About">About</a>
                                    </li>

                            <li> 
                              <a href="/#Contact">Contact Us </a>
                            </li>
                            

                            <li> 
                              <a href="/#Buy-Now">Buy Now </a>
                            </li>


                          </ul>


                   </div>
 


        </div>
    </nav>
  )}
  
  
  
                          {/* <div className="info">
                              <li a className="active" href="#home">Home </li>
                                <li a href="#news">About Us </li >
                                <li href="#contact">Contact Us </li>
                                <li href="#about">Buy Now </li>
                              </div> */}
