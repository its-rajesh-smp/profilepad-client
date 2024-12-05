import { SOCKET_EVENTS } from "@/common/constants/socket-events.const";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize from "@/common/hooks/useScreenSize";
import useSupabaseListener from "@/common/hooks/useSupabaseListener";
import { emitSupabaseEvent } from "@/setup/supabase.conf";
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

  // Opened a subscription to receive incoming calls
  // Opened a subscription to call received
  useSupabaseListener(
    {
      [`${SOCKET_EVENTS.PLAYER_MOVED}`]: MoveAPlayer,
      [`${SOCKET_EVENTS.PLAYER_JOINED}`]: handelSpawnOtherPlayer,
    },
    "game",
  );

  const { orientation } = useScreenSize();

  const throttledEmitPlayerMoved = throttle((player: any) => {
    emitSupabaseEvent(SOCKET_EVENTS.PLAYER_MOVED, JSON.parse(player), "game");
  }, 500);

  /**
   * Function to handle player movement
   */
  const playerMoveListener = (player: any) => {
    // Emit current player moved event to other players
    // emitEvent(SOCKET_EVENTS.PLAYER_MOVED, JSON.parse(player));
    throttledEmitPlayerMoved(player);
  };

  const playerInteractListener = (playersJSON: any) => {
    const players = JSON.parse(playersJSON);
    setVideoCallers(players);
  };

  /**
   * Function to spawn current player on Unity
   */
  function SpawnCurrentPlayer() {
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

    emitSupabaseEvent(SOCKET_EVENTS.PLAYER_JOINED, player, "game");
  }

  /**
   * Function to spawn other player on Unity
   * @param playerData player data
   */
  function handelSpawnOtherPlayer(playerData: any) {
    console.log(playerData);
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
