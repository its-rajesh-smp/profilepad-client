import VidePlayer from "./VidePlayer";

function VideoContainer({ streams, closeConnection }: any) {
  return (
    <div className="absolute right-2 top-2 flex flex-col gap-5">
      {streams[0] && <VidePlayer stream={streams[0]} />}
      {streams[1] && (
        <VidePlayer closeConnection={closeConnection} stream={streams[1]} />
      )}
    </div>
  );
}

export default VideoContainer;
