import React from 'react';
import './nav-bar.css';
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <div className= 'nav-bar'>
            <Link to= '/about'> <div>About</div> </Link>
            <Link to= '/works'> <div>Works</div> </Link>
            <Link to= '/photos'> <div>Photos</div> </Link>
            <Link to= 'thoughts'> <div>Thoughts</div> </Link>
        </div>
    );
}

export default NavBar;