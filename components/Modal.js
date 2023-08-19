import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import ReactPlayer from "react-player/youtube";

function Modal({ show, setShow, id }) {
  const [movie, setMovie] = useState({});
  const [trailerId, setTrailerId] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9c581c41f799139adb8ddf77aa9fade2&language=en-US`,
        { signal: controller.signal }
      );
      const data = await res.json();
      setMovie(data);
    }
    fetchMovie();
    getYtvideo(id);

    return () => {
      controller.abort();
    };
  }, [id]);

  const getYtvideo = async (id) => {
    const controller = new AbortController();
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9c581c41f799139adb8ddf77aa9fade2&language=en-US`,
      {
        signal: controller.signal,
      }
    );
    const data = await res.json();
    if (data.id) {
      setTrailerId(data?.results[0]?.key);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 1 },
  };

  return (
    <div
      style={{
        display: `${show ? "flex" : "none"}`,
        backgroundColor: "rgba(0,0,0,0.7",
      }}
      className="px-3 text-white  flex items-center justify-center fixed z-50 top-0 left-0 right-0 bottom-0 "
    >
      <motion.div
        variants={variants}
        animate={show ? "visible" : "hidden"}
        className="w-full scrollbar-hide overflow-y-scroll sm:h-content h-5/6 max-w-3xl text-left flex flex-col rounded-lg p-4 bg-[#121212]"
      >
        <button
          onClick={() => {
            setPlaying(false);
            setShow(false);
            setMovie({});
          }}
        >
          <MdClose className="mb-4 text-3xl" />
        </button>
        <ReactPlayer
          controls
          width="100%"
          playing={playing}
          onStart={() => setPlaying(true)}
          onEnded={() => setPlaying(false)}
          url={`https://www.youtube.com/watch?v=${trailerId}-U`}
        />

        <h1 className="py-3 font-semibold text-4xl">{movie.title}</h1>
        <p className="text-gray-300">{movie?.overview}</p>
        <div className="h-0.5 my-3 bg-gray-300" />
        <p className="text-gray-400 text-xs">
          <span>Rating:</span> {movie?.vote_average}
        </p>
        <p className="text-xs text-gray-400">
          <span className="text-xs">Release data:</span> {movie?.release_date}
        </p>
        <p className="text-xs text-gray-400">
          <span>Genres:</span>
          {movie.genres
            ?.map((g) => {
              return g.name;
            })
            .join(", ")}
        </p>
      </motion.div>
    </div>
  );
}

export default Modal;
