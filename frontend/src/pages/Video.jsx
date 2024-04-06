import { React, useState, useRef } from "react";
import Container from "../components/Container";
import ListVideo from "../components/ListVideo";
import { useEffect } from "react";

const Video = () => {
  const [video, setVideo] = useState({
    src: "",
    title: "React Front End",
    description: "asdfghjkl"
  });

  const [videos, setVideos] = useState([
    {
        title: "lecture1",
        description: "description1",
        isDeleted: false ,
        video: {
            public_id: "123456sdfff",
            url: "https://videos.pexels.com/video-files/20325563/20325563-hd_1920_1080_60fps.mp4"
        }
    },
    {
        title: "lecture2",
        description: "description2",
        isDeleted: false ,
        video: {
            public_id: "123456sdggg",
            url: "https://videos.pexels.com/video-files/20576968/20576968-hd_1920_1080_25fps.mp4"
        }
    },
    {
        title: "lecture3",
        description: "description3",
        isDeleted: false ,
        video: {
            public_id: "123456sdhhhh",
            url: "https://videos.pexels.com/video-files/20576968/20576968-hd_1920_1080_25fps.mp4"
        }
    },
  ]);
  const [isVideosClicked, setIsVideosClicked] = useState(true);
  console.log(video.src);
  const [document, setDocument] = useState({
    public_id: "123444dddd",
    url: "https://www.pexels.com/video/ocean-waves-on-los-angeles-beach-20325563/"
  })

  const videoRef = useRef() 

  useEffect(() => {
    videoRef.current.src = video.src || null
    videoRef.current.load();
  }, [video])

  return (
    <Container>
      <div className="flex gap-5">
        {/* video player */}
        <div className="w-[80%] flex flex-col gap-5">
          <video ref={videoRef} height="940px" width="full" controls>
            {/* <source ref={videoRef} src={video.src} /> */}
          </video>

          <div>
            <h1 className="font-bold text-3xl ">{video.title}</h1>
            <p className="font-medium py-4">
              {video.description}
            </p>
          </div>
        </div>

        {/* video list */}
        <div className="w-[20%] bg-[#F8F6E3] rounded-lg p-3">
          <div className="w-full flex gap-1 border-b-2">
            <p
              className={`text-center w-full px-1 py-2 text-sm cursor-pointer ${
                isVideosClicked && "bg-orange-400"
              }`}
              onClick={() => setIsVideosClicked(true)}
            >
              Videos
            </p>
            <p
              className={`text-center w-full px-1 py-2 text-sm cursor-pointer ${
                !isVideosClicked && "bg-orange-400"
              }`}
              onClick={() => setIsVideosClicked(false)}
            >
              Documents
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4">
          {isVideosClicked && (
            videos.map((video) => <ListVideo key={video.video.public_id} video={video} setVideo={setVideo} />)
          )}

          {!isVideosClicked && 
          <a className="hover:underline hover:cursor-pointer text-center" href={document && document.url } target="_blank">doc</a>
          }
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Video;
