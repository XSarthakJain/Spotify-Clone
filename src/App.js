import React,{ useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotiWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotiWebApi();

function App() {

  // let [token,setToken] = useState(null);
  let [{user,token},dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    console.log("Code here = ",hash);
    const _token = hash.access_token;
    if(_token){
      // setToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        dispatch({
          type:"SET_USER",
          user:user
        });
      });
    }
  }, []);

  console.log("Get ME",user,token); 

  return (
    <div className="App">

    {/* Start Check User logged In or not */}

    {token?(<Player/>):(<Login/>)}

    {/* End */}
      

    </div>
  );
}

export default App;
