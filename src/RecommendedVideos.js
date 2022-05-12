import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className='recommendedVideos'>
        <h2>Recommended</h2>
        <div className='recommendedVideos__videos'>
            <VideoCard image={image} title={title} channel={channel} views={views} timestamp={timestamp} channelImage={channelImage} />
        </div>
    </div>
  )
}

export default RecommendedVideos