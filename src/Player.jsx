import React from 'react';
import "./css/Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
let Player = ({ spotify })=>{
    return (
        <React.Fragment>
            <div className="player">
                <div className="player_body">
                    {/* SideBar */}
                    <Sidebar/>
                    {/* Body */}
                    <Body spotify={spotify}/>
                </div>

                {/* Footer */}
                <Footer/>
            </div>
        </React.Fragment>
    );
}

export default Player;