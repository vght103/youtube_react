import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    console.log(`useEffect`);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAkSAKUeh1PvlHicEEqMM4VwrkcRhfNLhk&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAkSAKUeh1PvlHicEEqMM4VwrkcRhfNLhk",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
