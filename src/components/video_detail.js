import React, { Component } from 'react';

const VideoDetail = ({video}) => {
  console.log(video)
  if (!video) {
    return <div> Loading... </div>
  }
  // craft own video url
  const videoId = video.id.videoId;
  console.log(videoId)
  // string interpolation, use `` not ''
  // or
  // const url = 'http://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(url)

  return (
    <div className= 'video-detail col-md-8'>
      <div className= 'embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div className='detailsTitle'>{video.snippet.title}</div>
        <div className='detailsDesc'>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
