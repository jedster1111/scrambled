import { type FC } from "react";
import { useQuery } from "@tanstack/react-query";
import gamesApi from "./GamesApi.js";

export const GameBrowser: FC = () => {
  const {
    status,
    data: games,
    error,
  } = useQuery({
    queryKey: ["games"],
    queryFn: gamesApi.getGames,
  });

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
              {g.name} - Players: {g.players.length}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
