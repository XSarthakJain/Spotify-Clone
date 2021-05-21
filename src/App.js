import React,{ useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
function App() {

  let [token,setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    console.log("Code here = ",hash);
    const _token = hash.access_token;
    if(_token){
      setToken(_token);
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
