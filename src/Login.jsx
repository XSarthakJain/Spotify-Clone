import React, { useEffect } from 'react';
import './css/Login.css';
import { loginurl } from './spotify';
let Login = ()=>{
    return (
        <React.Fragment>
            <div className="login">
                <img src="https://www.scdn.co/i/_global/twitter_card-default.jpg" alt="Spotify Banner"/>
                <h2>Spotify</h2>
                <a href={loginurl}>Login with Spotify</a>
            </div>
        </React.Fragment>
    );
}
export default Login;