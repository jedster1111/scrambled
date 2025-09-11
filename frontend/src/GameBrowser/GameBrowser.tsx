import { type Dispatch, type FC } from "react";
import { useQuery } from "@tanstack/react-query";
import gamesApi from "./GamesApi.js";

type GameBrowserProps = {
  setGameId: Dispatch<string>;
};

export const GameBrowser: FC<GameBrowserProps> = ({ setGameId }) => {
  const {
    status,
    data: games,
    error,
  } = useQuery({
    queryKey: ["games"],
    queryFn: gamesApi.getGames,
  });

  const handleClickJoinGame = (gameId: string) => {
    setGameId(gameId);
  };

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Game Browser</h1>
      <div>
        <ul>
          {games.map((g) => (
            <li key={g.id}>
              <span>
                {g.name} - Players: {g.players.length}
              </span>
              <button
                onClick={() => {
                  handleClickJoinGame(g.id);
                }}
              >
                Join
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
