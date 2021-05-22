import React from 'react';
import './css/Footer.css';

import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

let Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
               <div className="footer_left">
                    <img src="https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg" alt="Song image" className="footer_albumlogo"/>
                    <div className="footersongInfo">
                        <h4>Song name</h4>
                        <p>Song Info</p>
                    </div>
               </div>

               <div className="footer_center">
                   <ShuffleIcon className="footer_green"/>
                   <SkipPreviousIcon className="footer_icon"/>
                   <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
                   <SkipNextIcon className="footer_icon"/>
                   <RepeatIcon className="footer_green"/>
               </div>

               <div className="footer_right">
                    <Grid container spacing={2} className="MultiSlider-root">
                        <Grid item>
                            <PlaylistPlayIcon/>
                        </Grid>
                        <Grid item>
                            <VolumeDownIcon/>
                        </Grid>
                        <Grid item xs>
                            <Slider className="MultiSlider-root"/>
                        </Grid>
                    </Grid>
               </div>

            </div>
        </React.Fragment>
    );
}

export default Footer;