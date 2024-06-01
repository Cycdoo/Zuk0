// src/pages/VideoDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import videos from '../data/videos';

const VideoDetail = () => {
  const { id } = useParams();
  const video = videos.find(v => v.id === parseInt(id, 10));

  return (
    <div className="video-detail">
      <h2>{video.title}</h2>
      <video src={video.url} controls></video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoDetail;
