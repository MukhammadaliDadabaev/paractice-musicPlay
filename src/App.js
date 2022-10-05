// Adding components
import { useState } from "react";
import Library from "./components/Library";
import Music from "./components/Music";
import Nav from "./components/Nav";
import Player from "./components/Player";
// Adding style
import "./styles/app.scss";
// Adding date-Api
import Util from "./Util";

function App() {
  // STATE
  const [songList, setSongList] = useState(Util());
  const [currentMusic, setCurrentMusic] = useState(songList[0]);
  const [isPlayer, setIsPlayer] = useState(false);

  return (
    <div className="App">
      <Nav />
      <Music songList={currentMusic} setSongList={setSongList} />
      <Player
        songList={currentMusic}
        setCurrentMusic={setCurrentMusic}
        isPlayer={isPlayer}
        setIsPlayer={setIsPlayer}
      />
      <Library songs={songList} />
    </div>
  );
}
export default App;
