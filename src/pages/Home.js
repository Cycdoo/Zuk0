// src/pages/Home.js
import React from 'react';
import VideoCard from '../components/VideoCard';
import videos from '../data/videos';

const Home = () => (
  <div className="home">
    {videos.map(video => (
      <VideoCard key={video.id} video={video} />
    ))}
  </div>
);

export default Home;
