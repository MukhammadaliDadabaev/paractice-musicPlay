// Adding components
import { useState } from "react";
import Music from "./components/Music";
import Player from "./components/Player";
// Adding style
import "./styles/app.scss";
// Adding date-Api
import Util from "./Util";

function App() {
  // STATE
  const [songList, setSongList] = useState(Util());
  const [currentMusic, setCurrentMusic] = useState(songList[5]);
  const [isPlayer, setIsPlayer] = useState(false);

  return (
    <div className="App">
      <Music songList={currentMusic} />
      <Player
        songList={currentMusic}
        isPlayer={isPlayer}
        setIsPlayer={setIsPlayer}
      />
    </div>
  );
}
export default App;
