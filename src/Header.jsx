import React from 'react';
import './css/header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

let Header = ()=>{
    return (
        <React.Fragment>
            <div className="header">
                <div className="header-left">
                    <SearchIcon/>
                    <input type="search" placeholder="Search for Artists . Music"/>
                </div>

                <div className="header-right">
                    <Avatar src="" alt="RQ"/>
                    <h4>User name</h4>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;