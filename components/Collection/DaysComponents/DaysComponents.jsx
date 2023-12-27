import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const name = ["Ragavi Ravichandran", "Sriraam Shankar", "Thanish Kumar", "Sukanya Shete", "Kumaraguruparan", "Deepthi Shivani", "Cibi", "Mike"];
const founder = [images.user2, images.user1, images.user3, images.user4, images.user6, images.user7, images.user8, images.user10];
const collection = ["Anime Collections", "Rich Collections", "Gaming Collections", "Pixel Art Collections", "Futuristic Collections", "Amazing COllections", "Classic Collections", "Vintage Collections"];
const DaysComponents = ({ el, i }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={500}
            height={300}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={images[`creatorbackground${i + 2}`]}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_1}
            objectFit="covers"
          />
          <Image
            src={images[`creatorbackground${i + 4}`]}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_2}
            objectFit="covers"
          />
          <Image
            src={images[`creatorbackground${i + 3}`]}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_3}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>{collection[i]}</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={founder[i]}
                alt="profile"
                width={30}
                height={30}
                objectFit="covers"
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  {name[i]}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>{i + 4}.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
