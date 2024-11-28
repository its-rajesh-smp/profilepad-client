import { SOCKET_EVENTS } from "@/common/constants/socket-events.const";
import useSocketListener from "@/common/hooks/useSocketListener";
import { emitEvent } from "@/setup/socket.conf";

function Game() {
  useSocketListener(SOCKET_EVENTS.PLAYER_JOINED, (data) => {
    console.log(data);
  });

  return (
    <div>
      <button onClick={() => emitEvent("playerJoined", "hello")}>Join</button>
    </div>
  );
}

export default Game;
