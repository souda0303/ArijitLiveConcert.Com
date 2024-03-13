"use client";

import { useState } from "react";

import useSWR from "swr";
import Image from "next/image";

import { AudioPlayer } from "react-audio-play";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//fetcher
const fetcher = (url) => fetch(url).then((res) => res.json());

const AlbumSlider = () => {
  const [thumbsSwiper, setThumbsSwwiper] = useState(null);

  const { data, error } = useSWR("http://localhost:4000/albums", fetcher);
  console.log(data);

  if (error) return "failed to fetch data";
  if (!data) return "Loading...";

  return (
    <>
      {/* top slider */}
      <Swiper
        effect={"coverflow"}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="album-slider"
      >
        {data.map((album) => {
          return (
            <SwiperSlide key={album.id} className="mb-12">
              <div
                className="w-full bg-secondary/80 rounded-[10px] flex 
              flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12"
              >
                {/* image */}
                <div
                  className="hidden xl:flex items-center justify-center w-[300px] h-[300px] xl:w-[500px]
                 xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden"
                >
                  <Image
                    src={album.img}
                    fill
                    priority
                    alt=""
                    className="object-contain"
                  />
                </div>
                {/* track container */}
                <div className="flex flex-1 w-full h-[500px]">
                  {/* tracks */}
                  <div className="flex-1 flex flex-col xl:px-12">
                    {album.tracks?.map((track, index) => {
                      return (
                        <div
                          className="flex flex-1 w-full h-[500px]"
                          key={index}
                        >
                          {/* track name */}
                          <div
                            className="flex flex-1 items-center gap-x-2
                          capitalize font-semibold xl:font-extrabold"
                          >
                            <div className="text-accent text-sm xl:text-lg">
                              0{index + 1}.
                            </div>
                            <div className="text-sm xl:text-base">
                              {track.name}
                            </div>
                          </div>

                          {/* player */}
                          <div>
                            <AudioPlayer
                              style={{
                                background: "transparent",
                                boxShadow: "none",
                                width: "100%",
                              }}
                              src={track.src}
                              loop
                              preload="none"
                              color="#fff"
                              volume={40}
                              volumePlacement="bottom"
                              className="album-player"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* thumb slider */}
      <Swiper
        onSwiper={setThumbsSwwiper}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },

          425: {
            slidesPerView: 2,
            spaceBetween: 30
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          },

          1310: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumb-slider"
      >
        {data.map((thumb, index) => {
          return (
            <SwiperSlide key={index} className="relative group overflow-hidden 
            border-2 border-transparent w-[254px] rounded-[10px]">
              {/* img */}
              <div className="relative w-[255px] h-[255px] sm:w-[360px] sm:h[360px] 
              md:w-[240px] md:max-h-[240px] cursor-pointer">
                <Image
                  src={thumb.img}
                  fill
                  priority
                  alt=""
                  className="object-contain group-hover:scale-105 transition-all
                  duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AlbumSlider;
