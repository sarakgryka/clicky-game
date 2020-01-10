import React from 'react';

const ImageContainer = (props) => {
    return (
        <container>
        <div className="card">
            <div className="img-container">
                <img class= "images"src={props.image} alt={props.id} onClick={()=> props.handleClick(props.id)}/>
            </div>
        </div>
        </container>



    );
}

export default ImageContainer;