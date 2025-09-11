import { useState } from "react";
import "./App.css";
import { Game } from "./game/Game.js";
import { GameBrowser } from "./GameBrowser/GameBrowser.js";

function App() {
  const [gameId, setGameId] = useState<string>();

  return (
    <>
      <p>Current gameId: {gameId || "Not joined a game"}</p>
      <GameBrowser joinGame={setGameId} />
      {gameId && <Game gameId={gameId} />}
    </>
  );
}

export default App;
