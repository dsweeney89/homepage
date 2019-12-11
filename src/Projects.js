import React, { Component } from "react";
import FadeIn from "react-fade-in";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Projects extends Component {
  render() {
    const MovieSearchImages = [
      {
        original: require("./img/movie-search1.JPG"),
        thumbnail: require("./img/movie-search1-thumb.jpg"),
      },

      {
        original: require("./img/movie-search2.JPG"),
        thumbnail: require("./img/movie-search2-thumb.jpg"),
      },

      {
        original: require("./img/movie-search3.JPG"),
        thumbnail: require("./img/movie-search3-thumb.jpg"),
      },
    ];

    const WeatherAppImages = [
      {
        original: require("./img/weatherapp.JPG"),
        thumbnail: require("./img/weatherapp-thumb.JPG"),
      },

      {
        original: require("./img/weatherapp_dublin.JPG"),
        thumbnail: require("./img/weatherapp_dublin-thumb.JPG"),
      },

      {
        original: require("./img/weatherapp_london.JPG"),
        thumbnail: require("./img/weatherapp_london-thumb.JPG"),
      },
    ];

    return (
    
      <FadeIn delay={500}>
        <div>
          <div class="project">
            <form
              action="https://github.com/dsweeney89/Weather-App"
              target="_blank"
            >
              <button class="button-link">React Weather App</button>
            </form>
            <p>
              A React app for checking the weather around the world using the
              OpenWeather API.
            </p>
            <ImageGallery items={WeatherAppImages} />
          </div>
        </div>

   

        <hr className="ruler" />

        <div class="project">
          <form
            action="https://github.com/dsweeney89/omdb_project.github.io"
            target="_blank"
          >
            <button class="button-link">OMDB Movie Database Search</button>
          </form>

          <p>
            A simple search page using the OMDb API with Axios and JQuery,
            styled using Bulma
          </p>
          <p>Check out the Repo and give it a go!</p>
          <ImageGallery items={MovieSearchImages} />
        </div>
         <hr className="ruler" />
      </FadeIn>
    
    );
  }
}

export default Projects;
