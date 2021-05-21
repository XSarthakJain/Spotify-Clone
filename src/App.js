import React,{ useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotiWebApi from 'spotify-web-api-js';

const spotify = new SpotiWebApi();

function App() {

  let [token,setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    console.log("Code here = ",hash);
    const _token = hash.access_token;
    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        console.log("Get ME",user);
      })
    }


  }, []);

  return (
    <div className="App">

    {/* Start Check User logged In or not */}

    {token?(<h1>I am Login</h1>):(<Login/>)}

    {/* End */}
      

    </div>
  );
}

export default App;
