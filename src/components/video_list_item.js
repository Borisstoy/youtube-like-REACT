import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const = props.video;
  // ({video}) = ES6
  console.log(video)
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item videoList'>
      <div className='video-list-media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl} ></img>
        </div>

        <div className='media-right'>
          <div className= 'media-title'>
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
