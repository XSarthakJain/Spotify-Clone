import React from 'react';
import './css/Body.css';
import Header from './Header';
let Body = ({spotify}) => {
    return (
        <React.Fragment>
                <div className="body">
                    <Header spotify={spotify}/>
                </div>
        </React.Fragment>
    );
}

export default Body;