import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h1>Library</h1>
      <div className="music-library">
        {songs.map((song) => (
          <LibrarySong songList={song} />
        ))}
      </div>
    </div>
  );
};
export default Library;
