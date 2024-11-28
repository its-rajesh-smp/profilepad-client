// @ts-nocheck

import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

interface IUnityContainerProps {
  unityProviderRef: any;
  playerMoveListener: any;
}

function UnityContainer({
  unityProviderRef,
  playerMoveListener,
}: IUnityContainerProps) {
  const { unityProvider, addEventListener, sendMessage, isLoaded } =
    useUnityContext({
      loaderUrl: "GameBuild/Build/_padland.loader.js",
      dataUrl: "GameBuild/Build/_padland.data.unityweb",
      frameworkUrl: "GameBuild/Build/_padland.framework.js.unityweb",
      codeUrl: "GameBuild/Build/_padland.wasm.unityweb",
    });

  // Listener for unity events
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    unityProviderRef.current = sendMessage;
    window.playerMoveListener = playerMoveListener;
    addEventListener("playerMoveListener", window.playerMoveListener);
    return () => {
      removeEventListener("playerMoveListener", window.playerMoveListener);
      delete window.playerMoveListener;
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
