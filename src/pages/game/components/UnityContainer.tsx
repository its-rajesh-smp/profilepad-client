import { Unity, useUnityContext } from "react-unity-webgl";

function UnityContainer() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "GameBuild/Build/_padland.loader.js",
    dataUrl: "GameBuild/Build/_padland.data.unityweb",
    frameworkUrl: "GameBuild/Build/_padland.framework.js.unityweb",
    codeUrl: "GameBuild/Build/_padland.wasm.unityweb",
  });
  return (
    <Unity
      style={{ width: "100%", height: "100%" }}
      unityProvider={unityProvider}
    />
  );
}

export default UnityContainer;
