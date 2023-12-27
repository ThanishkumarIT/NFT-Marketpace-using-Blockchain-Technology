import React from "react";

//INTERNAL IMPORT
import Style from "../styles/subscription.module.css";
import Subscription from "../Subscription/Subscription";
const subscription = () => {
  const subscriptionArray = [
    {
      plan: "Silver",
      price: "$5/mo",
      popular: "Affordable",
      service: ["Faster NFT Upload", "Low Gas fees", "24*7 Support"],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "Gold",
      price: "$15/mo",
      popular: "Popular",
      service: [
        "Faster NFT Upload", "Low Gas fees", "24*7 Support",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "Diamond",
      price: "$25/mo",
      popular: "Premium",
      service: [
        "Faster NFT Upload", "Low Gas fees", "24*7 Support",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
  ];
  return (
    <div className={Style.Subscription}>
      <div className={Style.Subscription_box}>
        <div className={Style.Subscription_box_info}>
          <h1>💎 Subscription</h1>
          <p>Choose your plan according to your budget.</p>
        </div>

        <div className={Style.Subscription_box_box}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i + 1} i={1} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default subscription;
