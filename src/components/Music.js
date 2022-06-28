import React from "react";

const Music = ({ songList }) => {
  return (
    <div className="music-container">
      <img src={songList.photo} alt="music" />
      <h1>{songList.name}</h1>
      <h3>{songList.artist}</h3>
    </div>
  );
};
export default Music;
