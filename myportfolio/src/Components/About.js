import React from "react";
import {Link} from "react-router-dom"

function About(){

    return(

        <div className = "about-container">
            <div className = "content-holder">
                    
                    <Link to = "/Contact" className = "top-contact-link">
                            <div className = "top-contact">
                                <p>Contact</p>
                            </div>
                        </Link>

                        <Link to = "/" className = "top-Troy-link" >
                            <div className = "top-Troy">
                                <p >Home</p>
                            </div>
                        </Link>
                                 
                        <Link to = "/Projects" className = "top-projects-link">
                            <div className = "top-projects">
                                <p> Projects</p>
                            </div>
                        </Link>
                   
                    
                </div>

            About Me
        </div>


    )



}

export default About