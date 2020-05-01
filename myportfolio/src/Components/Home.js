import React from "react"
import "../Style/Home.css"
import {Link} from "react-router-dom"


function Home(){



    return(
        <div className = "home-page-container">
            
           
               
                <div className = "content-holder">
                    

                        <Link to = "/Contact" className = "top-contact-link">
                            <div className = "top-contact">
                                <p>Contact</p>
                            </div>
                        </Link>

                        <Link to = "/About" className = "top-Troy-link" >
                            <div className = "top-Troy">
                                <p >Troy Moore</p>
                            </div>
                        </Link>
                                 
                        <Link to = "/Projects" className = "top-projects-link">
                            <div className = "top-projects">
                                <p> Projects</p>
                            </div>
                        </Link>
                   
                    
                </div>
            

            <div className = "middle-block">
                <div className = "middle-color">
                <p>I design unique online experiences</p>
                <div className = "image-container">
                    Thar be images here
                    <div className = "theLinks"></div>
                </div>
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

export default Home