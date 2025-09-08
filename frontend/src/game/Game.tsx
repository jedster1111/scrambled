import { useCallback, type FC } from "react";
import useWebSocket from "react-use-websocket";

type Message<
  Id extends string,
  Payload extends Record<string, string | number> | undefined = undefined,
> = { id: Id; payload: Payload };

type HelloMessage = Message<"hello", undefined>;

type Messages = HelloMessage;

export const Game: FC = () => {
  const { sendJsonMessage, lastJsonMessage } = useWebSocket<Messages>(
    "ws://localhost:3000/ws",
    {
      shouldReconnect: () => true,
      onMessage: (e) => {
        console.log("Received message with data:", e.data);
      },
    },
  );

  const handleClickSendJsonButton = useCallback(() => {
    sendJsonMessage({ id: "hello" });
  }, [sendJsonMessage]);

  const lastMessageStringified =
    JSON.stringify(lastJsonMessage, undefined, 2) || "NA";

  return (
    <div>
      <h1>Game!</h1>
      <p>Last json message: {lastMessageStringified}</p>
      <ul>
        <button onClick={handleClickSendJsonButton}>Send json message</button>
      </ul>
    </div>
  );
};
