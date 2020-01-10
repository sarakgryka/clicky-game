import React, { Component } from 'react';
import images from '../../images'
import Navbar from '../Navbar/Navbar'
import Jumbotron from '../Jumbotron/Jumbotron'
import Footer from '../Footer/Footer'
import ImageContainer from '../ImageContainer/ImageContainer';

class GameImages extends Component {

    state = {
        images,
        score: 0,
        highscore: 0
    }
    shuffleImages = (array) => {
      

        array.sort(() => Math.random() - 0.5);

      return array;

    }
    handleClick = (id) => {
        //change state to true//
        let imagesCopy = [...this.state.images]

        for (let i = 0; i < this.state.images.length; i++) {

            let image = imagesCopy[i]
            // console.log(image)

            let imageId = image.id

            console.log(imageId)

            if (imageId === id) {


                if (image.clicked === true) {


                    if (this.state.score > this.state.highscore) {
                        let images = this.state.images.map(image => {
                        image.clicked = false
                            return image;

                        })

                        let imagesShuff = this.shuffleImages(imagesCopy)
                        this.setState({ highscore: this.state.score, score: 0, images: imagesShuff });

                    }



                }
                else {

                    image.clicked = true;
                    let imagesShuff = this.shuffleImages(imagesCopy)
                   
                    this.setState({ images: imagesShuff, score: this.state.score + 1 });



                }
            }

        }

        
        //add value to score//


        //shuffle images//


        //update highscore//

        //restart game//
    }
    render() {


        return (
            <div>
                <Navbar
                    score={this.state.score}
                    highscore={this.state.highscore}
                />
                <Jumbotron />
                {
                    this.state.images.map(image => (
                        <ImageContainer
                            image={image.image}
                            handleClick={this.handleClick}
                            id={image.id}
                        />
                    ))
                }
                <Footer />
            </div>

        )
    }


}

export default GameImages;