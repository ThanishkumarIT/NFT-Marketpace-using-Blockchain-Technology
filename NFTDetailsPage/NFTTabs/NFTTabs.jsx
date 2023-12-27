import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./NFTTabs.module.css";
import images from "../../img";
const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTTabs}>
        <div className={Style.NFTTabs_box}>
          <Image
            src={images.user2}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $770 by <span>Ragavi Ravichandran</span>
              {icon}
            </span>

            <small>Jan 14 - 4:12 PM</small>
          </div>
          <Image
            src={images.user1}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $785 by <span>Sriram Jai Shankar</span>
              {icon}
            </span>

            <small>Jan 16 - 2:01 PM</small>
          </div>
        </div>
    </div>
  );
};

export default NFTTabs;
