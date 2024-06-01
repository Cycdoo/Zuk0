// VideoCard.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PreviewWindow from './PreviewWindow';

const VideoCard = ({ video }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
        />
        <h3>{video.title}</h3>
      </Link>
      {showPreview && <PreviewWindow video={video} />}
    </div>
  );
};

export default VideoCard;
