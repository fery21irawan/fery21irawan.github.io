import React from "react";
import { certificates } from "../data/certificates";

function Certificate() {
  return (
    <>
      {certificates.map((certificate, i) => (
        <div key={i} className="flex flex-col w-full">
          <div className="divider divider-start">
            <h2 className="text-xl font-semibold">{certificate.title}</h2>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {certificate.datalist &&
              certificate.datalist.map((datalist, i) => (
                <li key={i}>
                  <a
                    className="hover:cursor-pointer link-certificates"
                    data-certificate={datalist.url}
                  >
                    <img
                      src={datalist.url}
                      alt=""
                      loading="lazy"
                      className="hover:opacity-90 hover:scale-95 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Certificate;
