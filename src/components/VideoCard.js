import React from 'react';
import './VideoCard.css';
const VideoCard = ({ thumbnail, title, channel, views }) => {
  return (
    <div className="videoCard">
      <img src={thumbnail} alt={title} className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
