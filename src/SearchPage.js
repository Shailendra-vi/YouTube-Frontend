import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage({image, channel, description}) {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneIcon />
            <h2>Filter</h2>
        </div>
        <hr />
        <ChannelRow image='' channel='' verified='' subs='' noOfVideos='' description=""/>
        <hr />
        <VideoRow views='' subs='' description={description} timestamp='' channel={channel} title='' image={image} />
    </div>

  )
}

export default SearchPage