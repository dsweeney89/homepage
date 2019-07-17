import React, { Component } from "react"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import "./index.css";
import FadeIn from 'react-fade-in'


class Main extends Component {

    render() {
        return (
        
            <HashRouter>
            
                <div>
                <FadeIn delay={100}>
                   <h1 id="signature">Darren Sweeney - Front End Web Developer</h1>
                       
                   <hr/>
                        <ul className="header">
                           
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>

                    

        

                        
                        <div className="content">
                           
                            <Route path="/projects" component={Projects}/>
                            <Route exact path="/" component={Home}/>
                            <Route path="/contact" component={Contact}/>                            
                        </div>
                    </FadeIn>     
                </div>
               
                <div id="quote-section">
                    <p id="quote">"Design is not just what it looks like and feels like. Design is how it works."</p>
                    <cite>Steve Jobs</cite>
                </div>
              
                 
            </HashRouter>
           
        )
    }
}

export default Main
