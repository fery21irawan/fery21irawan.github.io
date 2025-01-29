import React from "react";
import profile from "../data/profile";
import { socialMedia } from "../data/sosmed";
import SocialMedia from "./SocialMedia";
import { VscVerifiedFilled } from "react-icons/vsc";
import MouseIcon from "./MouseIcon";

function Hero() {
  return (
    <div className="lg:min-h-screen lg:flex lg:justify-center lg:items-center">
      <figure>
        <img
          className="lg:hidden mx-auto w-24 h-24 rounded-full"
          src={profile.imageUrl}
          alt=""
          data-aos="fade-down"
        />
        <figcaption className="text-center mt-2">
          <h1 className="font-semibold text-2xl lg:text-5xl lg:mb-2">
            <span
              className="flex justify-center items-end gap-x-1"
              data-aos="fade-right"
            >
              {profile.name}
              <VscVerifiedFilled className="w-8 h-8 text-blue-500" />
            </span>
          </h1>
          <p className="text-sm lg:text-xl" data-aos="fade-left">
            {profile.jobs}
          </p>
        </figcaption>
        <div className="mt-2 px-5 w-2/2">
          <SocialMedia />
        </div>
      </figure>
      <div className="absolute bottom-20" data-aos="zoom-in">
        <MouseIcon />
      </div>
    </div>
  );
}

export default Hero;
