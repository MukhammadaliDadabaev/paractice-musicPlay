import React from "react";

const LibrarySong = ({ songList }) => {
  return (
    <div className="music-content">
      <img src={songList.photo} alt={songList.name} />
      <h1>{songList.name}</h1>
      <h3>{songList.artist}</h3>
    </div>
  );
};
export default LibrarySong;
