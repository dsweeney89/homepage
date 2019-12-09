import React, { Component } from "react";
import FadeIn from "react-fade-in";

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>Interested in working together?</h3>
        <FadeIn delay={500}>
          <form action="mailto:dsweeneywebdev@outlook.com">
            <button class="button-link">Get in touch</button>
          </form>
        </FadeIn>
      </div>
    );
  }
}

export default Contact;
