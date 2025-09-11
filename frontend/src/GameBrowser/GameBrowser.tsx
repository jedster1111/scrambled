import { Suspense, type FC } from "react";
import { GamesList, GamesListError, GamesListLoading } from "./GamesList.js";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

type GameBrowserProps = {
  joinGame: (gameId: string) => void;
};

export const GameBrowser: FC<GameBrowserProps> = ({ joinGame }) => {
  const { reset: resetQueryErrorBoundary } = useQueryErrorResetBoundary();

  return (
    <div>
      <h1>Game Browser</h1>
      <div>
        <ErrorBoundary
          onReset={resetQueryErrorBoundary}
          fallbackRender={({ resetErrorBoundary }) => {
            return <GamesListError retryLoadGames={resetErrorBoundary} />;
          }}
        >
          <Suspense fallback={<GamesListLoading />}>
            <GamesList joinGame={joinGame} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
