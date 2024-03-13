"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

import SectionHeader from "../SectionHeader";
import AlbumSlider from "./AlbumSlider";

const Albums = () => {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        {/* album slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once : false, amount : 0.3}}
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Albums;
