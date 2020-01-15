import React from 'react'



const Navbar = (props) => {
    return (

        
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fluid">
                <div class="navbar-brand mr-auto">Clicky Game</div>
                <div class="navbar-brand mr-auto">Score:{props.score}</div>
                <div class="navbar-brand mr-auto">High Score:{props.highscore}</div>

            </nav>
       
    )
}

export default Navbar;