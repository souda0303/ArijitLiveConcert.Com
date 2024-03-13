"use client";

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "/variants.js";

const Player = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="bg-gradient-to-r h-[100px] from-tertiary/70 to-primary/10 backdrop-blur-[15px] flex items-center relative z-40">
        <div className="container mx-auto flex flex-col items-center xl:flex-row">
          {/* text & avatar */}
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            {/* avatar image */}
            <div className="relative w-16 h-16 ">
              <Image src={"/assets/player/image.png"} fill alt="" priority />
            </div>
            {/* text */}
            <div className="leading-none">
              <div className="text-lg font-medium">Arijit Singh</div>
              <div className="text-sm font-light">Aashiqui 2</div>
            </div>
          </div>
          {/* player */}
          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={40}
              volumePlacement="top"
              src="/assets/freedom.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
                width: "100%",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Player;
