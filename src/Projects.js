import React, {Component} from "react";
import FadeIn from 'react-fade-in';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";



class Projects extends Component{
    render(){

        const MovieSearchImages = [
                {
                    original: require('./img/movie-search1.JPG'),
                    thumbnail: require('./img/movie-search1-thumb.jpg')
                },
                
                {
                    original: require('./img/movie-search2.JPG'),
                    thumbnail: require('./img/movie-search2-thumb.jpg')
                },
                    
                {
                    original: require('./img/movie-search3.JPG'),
                    thumbnail: require('./img/movie-search3-thumb.jpg')
                },
                    
                ];

    
        return(
            <FadeIn delay={100}>
                <div>
            
                    <form action="https://github.com/dsweeney89/omdb_project.github.io" target="_blank">
                        <button class='button-link'>OMDB Movie Database App</button>
                    </form>
                    
                    <p>A simple search page using the OMDb API with Axios and JQuery, styled using Bulma</p>
                    <p>Check out the Repo and give it a go!</p>
                    <ImageGallery items={MovieSearchImages} />

                    <h3>More to come!!!......</h3>

                </div>
            </FadeIn>
        )
    }
 
}

export default Projects;