import React from 'react';
import './css/Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

let Body = ({spotify}) => {
    const [{ discover_weekly },dispatch] = useDataLayerValue();
    return (
        <React.Fragment>
                <div className="body">
                    <Header spotify={spotify}/>

                    <div className="body_info">
                        <img src={discover_weekly?.images[0].url} alt="" />
                        <div className="body_infoText">
                            <strong>PLAYLIST</strong>
                            <h2>Discovery Weekly Banner</h2>
                            <p>{discover_weekly?.description}</p>
                        </div>
                    </div>

                    <div className="body_songs">
                        <div className="body_icons">
                            <PlayCircleFilledIcon className="body_shuffle"/>
                            <FavoriteIcon fontSize="large"/>
                            <MoreHorizIcon />
                        </div>

                        {/* List of Songs */}
                        {discover_weekly?.tracks.items.map(item=>(
                            <SongRow track={item.track}/>
                        ))}
                    </div>

                </div>
        </React.Fragment>
    );
}

export default Body;