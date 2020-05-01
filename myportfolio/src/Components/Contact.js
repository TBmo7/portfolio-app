import React from "react"
import {Link} from "react-router-dom"
import "../Style/Contact.css"


function Contact(){


    return(

       <div className = "contact-holder">

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

                <div className = "middle-block">
                    <div className = "contact-info">
                        <p>professional email here</p>
                        <p>Link to Github here</p>
                        <p>Link to twitter here</p>
                        <p>Link to Linked in here</p>
                        <p>Link to blog</p>

                    </div>

                </div>

                <div className = "bot-nav-image">  
                <div className = "bottom-nav">
                    <Link to = "/About">
                    <button>About Me</button>
                    </Link>
                    <Link to ="/Contact">
                    <button>Contact</button>
                    </Link>
                    <Link to = "/Projects">
                    <button>Projects</button>
                    </Link>
                </div>
            </div>











        </div>


    )



}


export default Contact;