// PreviewWindow.js

import React from 'react';

const PreviewWindow = ({ video }) => (
  <div className="preview-window">
    <video src={video.url} autoPlay muted loop></video>
  </div>
);

export default PreviewWindow;
