import React from 'react';
import {Link} from 'react-router-dom'



export const Home = () => {

    return(
        <div>
            <Link to="signup">SIGN UP</Link>
            <Link to="login">LOGIN</Link>
        </div>
    )
}