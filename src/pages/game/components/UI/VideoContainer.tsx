import VidePlayer from "./VidePlayer";

function VideoContainer({ streams }: any) {
  return (
    <div className="flex h-full w-full justify-center gap-5">
      <VidePlayer stream={streams[0]} />
      <VidePlayer stream={streams[1]} />
    </div>
  );
}

export default VideoContainer;
