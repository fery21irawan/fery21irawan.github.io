import React from "react";
import { socialMedia } from "../data/sosmed";

function SocialMedia() {
  return (
    <ul className="flex flex-wrap justify-center">
      {socialMedia.map((social, i) => (
        <li key={i} data-aos="fade-up" data-aos-delay={100 * i}>
          <a
            href={social.link}
            className="btn btn-ghost btn-circle btn-sm"
            dangerouslySetInnerHTML={{ __html: social.icon }}
          />
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
