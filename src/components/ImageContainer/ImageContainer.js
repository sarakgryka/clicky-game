import React from 'react';
import './ImageContainer.css'

const ImageContainer = (props) => {
    return (

        
            <img class="images" src={props.image} alt={props.id} onClick={() => props.handleClick(props.id)} />

       


    );
}

export default ImageContainer;