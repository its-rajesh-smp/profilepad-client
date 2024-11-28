import { SOCKET_EVENTS } from "@/common/constants/socket-events.const";
import useSocketListener from "@/common/hooks/useSocketListener";
import UnityContainer from "./components/UnityContainer";

function Game() {
  useSocketListener(SOCKET_EVENTS.PLAYER_JOINED, (data) => {
    console.log(data);
  });

  return (
    <div className="flex h-screen w-full flex-col">
      <UnityContainer />
    </div>
  );
}

export default Game;
