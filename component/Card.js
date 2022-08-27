import Image from "next/image";
import React from "react";
import Design from "../public/Design.js";

const Card = ({ cardColor }) => {
  return (
    <>
      <div className="card">
        <div className="innerCard">
          <div className="userPhoto">
            <Image src={"/user.png"} alt={"user"} width={80} height={80} />
          </div>
          <p className="userName">Julie G. Slagle</p>
          <p className="uerDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="design">
            <Design color={cardColor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
