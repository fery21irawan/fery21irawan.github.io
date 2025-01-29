import React from "react";

function Profile() {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:gap-5 w-full">
      <div className="lg:w-1/2 p-5">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/20228547?v=4"
            alt=""
            srcSet=""
            className="hidden md:block rounded shadow-sm hover:scale-90 hover:translate-x-4 hover:-translate-y-4 transition-transform duration-500"
          />
        </div>
        <div data-aos="zoom-in">
          <div className="flex justify-center gap-5 my-5">
            <div>
              <span className="block">Name:</span>
              <span className="block">Birth:</span>
              <span className="block">Address:</span>
            </div>
            <div>
              <span className="block">Fery Irawan</span>
              <span className="block">July, 1995</span>
              <span className="block">
                Pamalian Village, East Kotawaringin, Central Kalimantan,
                Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 lg:w-3/4">
        <h1 className="text-3xl font-bold mb-3" data-aos="fade-left">
          About Me
        </h1>
        <div className="leading-loose">
          <p className="mb-1">
            🚀 I am a Software Developer with experience in web and mobile
            application development. My main expertise involves programming
            languages such as PHP, JavaScript, and Kotlin, as well as mastery in
            several leading frameworks such as Laravel, CodeIgniter 3 (CI3),
            Next.js, and Astro.js. I also have deep expertise in designing and
            implementing REST APIs to support integration and communication
            between systems.
          </p>
          <p className="mb-1" data-aos="fade-right">
            💻 In the course of my career, I have successfully created
            innovative and efficient solutions using Laravel and CI3 to build
            reliable and scalable web applications. My deep understanding of
            modern technologies, such as Next.js and Astro.js, allows me to
            develop responsive user interfaces and engaging user experiences. I
            also have significant experience in building native Android apps
            using Kotlin programming language and Android Studio IDE.
          </p>
          <p className="mb-1" data-aos="fade-right" data-aos-delay="100">
            🎨 In addition, I have expertise in using Tailwind CSS to design
            clean, efficient, and aesthetically pleasing interfaces.
          </p>
          <p className="mb-1" data-aos="fade-right" data-aos-delay="200">
            🌐 Currently, I am developing skills in Python programming language
            and am studying the field of Data Science. This opens up new
            opportunities for me to combine my technical expertise with data
            analysis insights and smart decision making.
          </p>
          <p className="mb-1" data-aos="fade-right" data-aos-delay="300">
            🔍 I have real experience in building REST APIs and Web Apps using
            Laravel Framework, Astrojs, NextJS and real experience in building
            native Android Apps using Android Studio and Kotlin programming
            language. I enjoy collaborating in teams, have a passion for
            continuous learning and development, and believe that technology can
            shape the future.
          </p>
          <p
            className="mb-1 font-semibold"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Open to discussion, collaboration, and new opportunities. Feel free
            to contact me!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
