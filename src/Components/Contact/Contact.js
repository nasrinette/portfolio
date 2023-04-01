import React from "react";
import './contact.scss'
import {FiMail} from 'react-icons/fi'

const Contact = ()=>{
    return(
        <footer className="contact">
           <h1>CONTACT ME</h1>   
           <p>If you are looking to hire a Designer or Frontend developer
              I'm currently available for freelance work</p>
            
            <a href={`mailto:${"nsrvansrn@gmail.com"}`} target="_blank" rel="noopener noreferrer">
            <div className="mail">
                <FiMail/><span>nsrvansrn@gmail.com</span>  
            </div>
            </a>

        </footer>
        
    )
}

export default Contact;