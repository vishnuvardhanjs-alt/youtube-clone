import React from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';
import bike from '../images/bike.jpg';

const VideoGrid = () => {
  return (
    <div className="videoGrid">
      <VideoCard 
        thumbnail={bike}
        title="ReactJS Tutorial"
        channel="React Channel"
        views="1M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
      <VideoCard 
        thumbnail={bike}
        title="JavaScript Basics"
        channel="JS World"
        views="2.5M"
      />
    </div>
    
  );
};

export default VideoGrid;
