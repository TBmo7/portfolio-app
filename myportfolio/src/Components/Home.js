import React from "react"

function Home(){

    return(
        <div className = "home-page-container">
            
            <div className = "top-block">
            </div>
                <div className = "name-separate">
                    <div className= "left-block"></div>
                    <div className = "name-holder">
                        Troy Moore
                    </div>
                    <div className = "right-block"></div>
                </div>
               
                <div className = "content-holder">
               
                    <div className = "top-contact-container">
                        Contact
                    </div>

                    <div className = "projects-container">
                    Projects
                    </div>
                </div>
            

            <div className = "middle-block">
                <p>I design unique online experiences</p>
                <div className = "image-container">
                    Thar be images here
                </div>
            </div>

            <div className = "bottom-nav">
                <button>About Me</button>
                <button>Contact</button>
                <button>Projects</button>
            </div>
            
            
            
            
            
            
            </div>
    )

}

export default Home