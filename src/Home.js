import React, { Component } from "react"
import FadeIn from 'react-fade-in';

class Home extends Component {
    render() {
        return ( 
        
            <div>
                <FadeIn delay={200}>
            
                    <h3>Hello, my name is Darren.</h3>

                    <h3>I am a Front End Web Developer living in Dublin, Ireland</h3>

                    <h3>I am passionate about <strong>UX/UI</strong> and <strong>accessible</strong> and <strong>responsive</strong> design</h3>

                    <h3>I have experience in working with <strong>HTML5, </strong><strong>CSS3, </strong><strong>Javascript, </strong><strong>JQuery </strong>and <strong>React</strong></h3>

                </FadeIn>
            
            </div>

        )
    }
}
export default Home;