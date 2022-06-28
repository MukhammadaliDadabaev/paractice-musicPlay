import React, { useRef, useState } from "react";
// Adding font-icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ songList, isPlayer, setIsPlayer }) => {
  // STATE
  const [songTime, setSongTime] = useState({
    startTime: null,
    endTime: null,
  });
  // Event Handler STATE-FUNCTION
  const musicTimefHandler = (e) => {
    const startTime = e.target.currentTime;
    const endTime = e.target.duration;

    setSongTime({
      startTime,
      endTime,
    });
  };
  // Event Handler Time-Function
  const timeHandler = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // Ref
  const audioRef = useRef(null);

  // Event Handler Ref-FUNCTION
  const audioRefHandler = () => {
    if (isPlayer) {
      audioRef.current.pause();
      setIsPlayer(!isPlayer);
    } else {
      audioRef.current.play();
      setIsPlayer(!isPlayer);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>
          <b>{timeHandler(songTime.startTime)}</b>
        </p>
        <input type="range" />
        <p>
          <b>{timeHandler(songTime.endTime)}</b>
        </p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={audioRefHandler} icon={faPlay} size="2x" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
      <audio
        src={songList.audio}
        onTimeUpdate={musicTimefHandler}
        onLoadedMetadata={musicTimefHandler}
        ref={audioRef}
      ></audio>
    </div>
  );
};
export default Player;
