import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./SliderCard.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

const src = ["https://player.vimeo.com/video/819559981?h=15ceaaf536&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
"https://player.vimeo.com/video/819730397?h=97ae29c582",
"https://player.vimeo.com/video/819731458?h=9672611d3e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
"https://player.vimeo.com/video/819733773?h=c3c5d14d1c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
"https://player.vimeo.com/video/819736001?h=2965636c84&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
"https://player.vimeo.com/video/819736413?h=9c3151a29a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"];
const SliderCard = ({ el, i }) => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <iframe
        width="340"
        height="300"
        src={src[i]}
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
        />
          </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #{i + 1}</p>
          <div className={Style.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>{i + 4} 0f 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>{i + 2}.000 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}>
            <small>Reaming time</small>
            <p>
              {i + 1}h : 15m : {i + 4}0s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
