import React from 'react';
import './css/header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
let Header = ()=>{
    let [{user},dispatch] = useDataLayerValue();
    return (
        <React.Fragment>
            <div className="header">
                <div className="header-left">
                    <SearchIcon/>
                    <input type="search" placeholder="Search for Artists . Music"/>
                </div>

                <div className="header-right">
                    <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                    <h4>{ user?.display_name }</h4>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;