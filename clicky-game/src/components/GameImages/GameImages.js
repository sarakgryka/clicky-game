import React, { Component } from 'react';
import images from '../../../public/images'
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Footer from './components/Footer/Footer'

class GameImages extends Component {

    state = {
       images
    }

  
    render() {


        return (
            <div>
            <Navbar/>
               <Jumbotron/>
                {
                    this.state.images.map(image => (

                        image = {image}
                    ))
                }
           
            </div>

        )
    }


}

export default GameImages;