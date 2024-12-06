import { SOCKET_EVENTS } from "@/common/constants/socket-events.const";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize from "@/common/hooks/useScreenSize";
import useSocketListener from "@/common/hooks/useSocketListener";
import { emitEvent } from "@/setup/socket.conf";
import { throttle } from "lodash";
import { useRef, useState } from "react";
import Connect from "./components/Connect";
import RotatePhone from "./components/UI/RotatePhone";
import UnityContainer from "./components/UnityContainer";

function Game() {
  const { email } = useAppSelector((state) => state.authSlice.user);
  const [videoCallers, setVideoCallers] = useState(null);
  const [isUnityLoaded, setIsUnityLoaded] = useState(false);
  const unityProviderRef: any = useRef(null);

  useSocketListener(`${SOCKET_EVENTS.PRE_SPAWN_EXISTING_PLAYERS}`, (data) => {
    data.forEach((a: any) => {
      handelSpawnOtherPlayer(a);
    });
  });
  useSocketListener(`${SOCKET_EVENTS.PLAYER_MOVED}`, handelMovePlayer);
  useSocketListener(`${SOCKET_EVENTS.PLAYER_JOINED}`, handelSpawnOtherPlayer);

  const { orientation } = useScreenSize();

  const throttledEmitPlayerMoved = throttle((player: any) => {
    emitEvent(SOCKET_EVENTS.PLAYER_MOVED, JSON.parse(player));
  }, 500);

  /**
   * Function to handle player movement
   */
  const playerMoveListener = (player: any) => {
    throttledEmitPlayerMoved(player);
  };

  const playerInteractListener = (playersJSON: any) => {
    const players = JSON.parse(playersJSON);
    setVideoCallers(players);
  };

  /**
   * Function to spawn current player on Unity
   */
  function handelSpawnCurrentPlayer() {
    const player = {
      playerId: email,
      posX: 0,
      posY: 0,
      playerName: email,
    };
    unityProviderRef?.current(
      "WebEventController",
      "CurrentUserJoinListener",
      JSON.stringify(player),
    );

    emitEvent(SOCKET_EVENTS.PLAYER_JOINED, player);
  }

  /**
   * Function to spawn other player on Unity
   * @param playerData player data
   */
  function handelSpawnOtherPlayer(playerData: any) {
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
  function handelMovePlayer(playerData: any) {
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
    handelSpawnCurrentPlayer();
  };

  // Check if the device is in a vertical orientation
  // If it is, return the RotatePhone component
  if (orientation == "v") {
    return <RotatePhone />;
  }

  return (
    <div className="relative flex h-screen w-full flex-col">
      {isUnityLoaded && <Connect videoCallers={videoCallers} />}
      <UnityContainer
        playerMoveListener={playerMoveListener}
        unityProviderRef={unityProviderRef}
        playerInteractListener={playerInteractListener}
        onUnityLoad={joinGame}
        setIsUnityLoaded={setIsUnityLoaded}
      />
      {/* <Button
        onClick={joinGame}
        className="absolute bottom-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
        icon={<BsPlus className="text-black" />}
      /> */}
    </div>
  );
}

export default Game;
