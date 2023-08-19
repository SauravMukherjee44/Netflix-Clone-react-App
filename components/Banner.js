import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import Image from "next/image";

SwiperCore.use([Autoplay]);

export default function Banner({ movies }) {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="relative md:h-[60vh] h-[50vh]"
    >
      {movies
        ?.filter((m) => {
          if (m.backdrop_path) {
            return m;
          }
        })
        .map((m) => (
          <SwiperSlide key={m.id} className="">
            <Image
              layout="fill"
              className="absolute w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original${
                m.backdrop_path || m.poster_path
              }`}
              alt="banner__image"
              loading="eager"
            />
            <div className="bg-gradient-to-t from-black absolute h-20 left-0 right-0 bottom-0"></div>
            <div className="absolute bottom-8 left-2 sm:left-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-white font-semibold text-2xl sm:text-5xl"
              >
                {m?.original_name || m.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="my-3 max-w-2xl text-sm sm:text-base line-clamp-3"
              >
                {m?.overview}
              </motion.p>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
