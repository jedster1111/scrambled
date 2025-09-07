import { useCallback, type FC } from "react";
import useWebSocket from "react-use-websocket";

export const Game: FC = () => {
  const { lastMessage, sendMessage } = useWebSocket("ws://localhost:3000/ws", {
    shouldReconnect: () => true,
    onMessage: (e) => {
      console.log("Received message with data:", e.data);
    },
  });

  const handleClickSendMessageButton = useCallback(() => {
    sendMessage("One small step for this client, and one huge step for...");
  }, [sendMessage]);

  const handleClickSendHelloServerButton = useCallback(() => {
    sendMessage("hello");
  }, [sendMessage]);

  return (
    <div>
      <h1>Game!</h1>
      <p>
        Last message: {JSON.stringify(lastMessage?.data, undefined, 2) || "NA"}
      </p>
      <button onClick={handleClickSendMessageButton}>Send message</button>
      <button onClick={handleClickSendHelloServerButton}>
        Send hello message
      </button>
    </div>
  );
};
