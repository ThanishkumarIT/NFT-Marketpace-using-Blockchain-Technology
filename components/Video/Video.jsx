import React from "react";
import Image from "next/image";

//INTERNALIMPORT
import Style from "./Video.module.css";
import images from "../../img";
const src = "https://player.vimeo.com/video/819568291?h=0aeb56c847&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          <span>🎬</span> The Videos
        </h1>
        <p>
          Check out our hottest videos. View more and share more new
          perspectives on just about any topic. Everyone’s welcome.
        </p>

          <div className={Style.Video_box_frame_left}>
              <iframe
          width="1200"
          height="720"
          src={src}
          title="Youtube Player"
          frameborder="0"
          allowFullScreen
          />
          </div>

      </div>
    </div>
  );
};

export default Video;
