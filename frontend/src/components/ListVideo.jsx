import React from "react";

const ListVideo = ({ video, setVideo }) => {
  return (
    <div className="w-full border-b-2">
      <button
        className="w-full"
        onClick={() => {
          setVideo({
            src: video.video.url,
            title: video.title,
            description: video.description,
          });

        }}
      >
        {video.title}
      </button>
    </div>
  );
};

export default ListVideo;
