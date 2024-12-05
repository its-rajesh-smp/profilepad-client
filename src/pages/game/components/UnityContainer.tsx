// @ts-nocheck

import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

interface IUnityContainerProps {
  unityProviderRef: any;
  playerMoveListener: any;
  playerInteractListener: any;
}

function UnityContainer({
  unityProviderRef,
  playerMoveListener,
  playerInteractListener,
}: IUnityContainerProps) {
  const { unityProvider, addEventListener, sendMessage, isLoaded } =
    useUnityContext({
      loaderUrl: "GameBuild/Build/padland.loader.js",
      dataUrl: "GameBuild/Build/padland.data.unityweb",
      frameworkUrl: "GameBuild/Build/padland.framework.js.unityweb",
      codeUrl: "GameBuild/Build/padland.wasm.unityweb",
    });

  // Listener for unity events
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    unityProviderRef.current = sendMessage;
    window.playerMoveListener = playerMoveListener;
    window.playerInteractListener = playerInteractListener;

    addEventListener("playerMoveListener", window.playerMoveListener);
    addEventListener("playerInteractListener", window.playerInteractListener);
    return () => {
      removeEventListener("playerMoveListener", window.playerMoveListener);
      removeEventListener(
        "playerInteractListener",
        window.playerInteractListener,
      );
      delete window.playerMoveListener;
      delete window.playerInteractListener;
    };
  }, [isLoaded]);

  return (
    <Unity
      style={{ width: "100%", height: "100%" }}
      unityProvider={unityProvider}
    />
  );
}

export default UnityContainer;
