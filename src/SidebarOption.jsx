import React from 'react';
import './css/SidebarOption.css';

let SidebarOption = ({title,Icon}) => {
    return (
        <React.Fragment>
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon"></Icon>}
            {Icon ? <h4>{title}</h4>:<p>{title}</p>}
        </div>
        </React.Fragment>
    );
}

export default SidebarOption;