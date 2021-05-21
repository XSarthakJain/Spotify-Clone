import React, { useEffect } from 'react';
import './css/Login.css';
import { loginurl } from './spotify';
let Login = ()=>{
    return (
        <React.Fragment>
            <div className="login">
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Banner"/>
                <a href={loginurl}>Login with Spotify</a>
            </div>
        </React.Fragment>
    );
}
export default Login;