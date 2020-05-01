import React from "react"
import {Link} from "react-router-dom"
import ProjectCard from "./ProjectCard"
import "../Style/Projects.css"
import projImg from "../Images/empowered-conversations.PNG"
import proj2Img from "../Images/sauti-dash.PNG"


function Projects(){

    const projectArray = [

        {
            name:"Empowered Conversations",
            technologies:"HTML, CSS, JS, LESS",
            responsibilities:"Created a landing page and an about page for an app focused on mental health",
            link:"https://atempoweredconversations.netlify.com",
            image: projImg,
            id:1,
            description:"Worked with another front end student to create the design, copy and code for the small site you see here."

        },
        {
            name:"Sauti Market",
            technologies:"HTML, CSS, JS, React, Axios, Styled Components",
            responsibilities:"Created a market listing populated via API call, included searchable forms, and designed the homepage for the app ",
            link:"https://sauti-frontend.netlify.com",
            image: proj2Img,
            id:2,
            description: "Worked with a team of react students, and a UI/UX student to create an app that allows East African farmers to find market prices and list their items"
        }


    ]


    return(

        <div className = "project-container">
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
                             
                    <Link to = "/" className = "top-projects-link">
                        <div className = "top-projects">
                            <p> Home</p>
                        </div>
                    </Link>
               
                
            </div>
            <div className = "middle-block">
                <div className = "middle-color">
                  <div className = "active-projects">
                    
                    {projectArray.map(item=>(
                        <ProjectCard 
                        key = {item.id} 
                        name = {item.name}
                        tech = {item.technologies}
                        resp = {item.responsibilities}
                        link = {item.link}
                        image = {item.image}
                        desc = {item.description}
                        /> 
                    ))}
                    
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
        

        <div>
           
        </div>

        </div>


    )


}

export default Projects;