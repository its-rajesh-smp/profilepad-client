import { SOCKET_EVENTS } from "@/common/constants/socket-events.const";
import useSocketListener from "@/common/hooks/useSocketListener";
import { emitEvent } from "@/setup/socket.conf";
import { useRef } from "react";
import { v4 } from "uuid";
import Connect from "./components/Connect";

function Game() {
  const unityProviderRef: any = useRef(null);

  // Listener for other player join event
  useSocketListener(SOCKET_EVENTS.PLAYER_JOINED, (playerData) => {
    SpawnOtherPlayer(playerData);
  });

  // Listener for other player move event
  useSocketListener(SOCKET_EVENTS.PLAYER_MOVED, (playerData) => {
    MoveAPlayer(playerData);
  });

  /**
   * Function to handle player movement
   */
  const playerMoveListener = (player: any) => {
    // Emit current player moved event to other players
    emitEvent(SOCKET_EVENTS.PLAYER_MOVED, JSON.parse(player));
  };

  /**
   * Function to spawn current player on Unity
   */
  function SpawnCurrentPlayer() {
    const player = {
      playerId: v4(),
      posX: 0,
      posY: 0,
      playerName: "Rajesh",
    };
    unityProviderRef?.current(
      "WebEventController",
      "CurrentUserJoinListener",
      JSON.stringify(player),
    );

    // Emit current player joined event to other players
    emitEvent(SOCKET_EVENTS.PLAYER_JOINED, player);
  }

  /**
   * Function to spawn other player on Unity
   * @param playerData player data
   */
  function SpawnOtherPlayer(playerData: any) {
    unityProviderRef?.current(
      "WebEventController",
      "PlayerJoinListener",
      JSON.stringify(playerData),
    );
  }

  /**
   * Function to move a player on Unity
   * @param playerData
   */
  function MoveAPlayer(playerData: any) {
    unityProviderRef?.current(
      "WebEventController",
      "PlayerMovementListener",
      JSON.stringify(playerData),
    );
  }

  /**
   * Function to join game
   */
  const joinGame = () => {
    SpawnCurrentPlayer();
  };

  return (
    <div className="relative flex h-screen w-full flex-col">
      <Connect />
      <div style={{ width: "100%", height: "100%" }}></div>
      {/*<UnityContainer
        playerMoveListener={playerMoveListener}
        unityProviderRef={unityProviderRef}
      />*/}
      {/* <Button
        onClick={joinGame}
        className="absolute bottom-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
        icon={<BsPlus className="text-black" />}
      /> */}
    </div>
  );
}

export default Game;
