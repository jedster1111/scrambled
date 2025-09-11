import { useSuspenseQuery } from "@tanstack/react-query";
import gamesApi from "./GamesApi.js";
import type { Dispatch, FC } from "react";

type GamesListProps = {
  joinGame: Dispatch<string>;
};

export const GamesListLoading: FC = () => {
  return <div>Loading...</div>;
};

type GamesListErrorProps = {
  retryLoadGames: () => void;
};

export const GamesListError: FC<GamesListErrorProps> = ({ retryLoadGames }) => {
  return (
    <div>
      <p>Failed to load games, please try again!</p>
      <button onClick={retryLoadGames}>Retry</button>
    </div>
  );
};

export const GamesList: FC<GamesListProps> = ({ joinGame }) => {
  const { data: games, refetch } = useSuspenseQuery({
    queryKey: ["games"],
    queryFn: gamesApi.getGames,
    refetchInterval: 10_000,
  });

  const handleClickJoinGame = (gameId: string) => {
    joinGame(gameId);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            refetch();
          }}
        >
          Refresh
        </button>
      </div>
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
  );
};
