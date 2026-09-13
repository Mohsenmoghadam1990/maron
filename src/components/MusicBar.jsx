
import { useEffect, useRef, useState } from "react";
import "./MusicBar.css";
import music from "../assets/music/background.mp3";

function MusicBar() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const firstClickHandled = useRef(false);

  /* =========================================================
     MUSIC SETUP
  ========================================================= */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.6;
    audio.loop = true;


    /* =======================================================
       SEND MUSIC STATE
    ======================================================= */

    const sendMusicState = (state) => {
      window.dispatchEvent(
        new CustomEvent("raikaMusicStateChange", {
          detail: state,
        })
      );
    };


    /* =======================================================
       GLOBAL MUSIC TOGGLE
    ======================================================= */

    window.toggleRaikaMusic = async () => {

      if (!audio) return;

      if (audio.paused) {

        try {

          await audio.play();

          firstClickHandled.current = true;

          setIsPlaying(true);

          sendMusicState(true);

        } catch (error) {

          console.log(
            "Music could not play:",
            error
          );

        }

      } else {

        audio.pause();

        setIsPlaying(false);

        sendMusicState(false);
      }
    };


    /* =======================================================
       GET MUSIC STATE
    ======================================================= */

    window.getRaikaMusicState = () => {
      return !audio.paused;
    };


    /* =======================================================
       FIRST USER CLICK
    ======================================================= */

    const playMusic = async () => {

      if (firstClickHandled.current) {
        return;
      }

      try {

        await audio.play();

        firstClickHandled.current = true;

        setIsPlaying(true);

        sendMusicState(true);

        document.removeEventListener(
          "click",
          playMusic
        );

        document.removeEventListener(
          "touchstart",
          playMusic
        );

      } catch (error) {

        console.log(
          "Music could not play:",
          error
        );

      }
    };


    document.addEventListener(
      "click",
      playMusic
    );

    document.addEventListener(
      "touchstart",
      playMusic
    );


    /* =======================================================
       CLEANUP
    ======================================================= */

    return () => {

      document.removeEventListener(
        "click",
        playMusic
      );

      document.removeEventListener(
        "touchstart",
        playMusic
      );

      delete window.toggleRaikaMusic;

      delete window.getRaikaMusicState;
    };

  }, []);


  /* =========================================================
     AUDIO EVENTS
  ========================================================= */

  const handlePlay = () => {

    setIsPlaying(true);

    window.dispatchEvent(
      new CustomEvent(
        "raikaMusicStateChange",
        {
          detail: true,
        }
      )
    );

  };


  const handlePause = () => {

    setIsPlaying(false);

    window.dispatchEvent(
      new CustomEvent(
        "raikaMusicStateChange",
        {
          detail: false,
        }
      )
    );

  };


  /* =========================================================
     AUDIO ONLY
  ========================================================= */

  return (
    <audio
      ref={audioRef}
      src={music}
      preload="auto"
      loop
      onPlay={handlePlay}
      onPause={handlePause}
    />
  );
}

export default MusicBar;

