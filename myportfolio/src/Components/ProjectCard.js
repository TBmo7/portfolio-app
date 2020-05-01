import React from "react"
 
import "../Style/ProjectCard.css"


function ProjectCard(props){
    console.log(props)
        console.log(props.image);
    return(

        <div className = "card-container">
            <div 
            className = "card-information"
            // style = {{ backgroundImage: `url(${props.image})`}}
           
            >
                <img src = {props.image} alt = "" />
                <div className = "text-update">
                    <p>{props.name}</p>
                    <p>Responsibilities: {props.resp}</p>
                    <p>Technologies used: {props.tech}</p>
                    <p>{props.desc}</p>
                    <a href = {props.link} 
                    target = "_blank"
                    rel = "noopener noreferrer"
                    >Link: {props.name}</a>
                </div>
            
            
               
            </div>
            
        </div>

    )


}

export default ProjectCard