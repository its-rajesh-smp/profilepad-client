import ReactPlayer from "react-player";

interface IVidePlayerProps {
  stream: string;
  isCurrent?: boolean;
}

function VidePlayer({ stream, isCurrent }: IVidePlayerProps) {
  return (
    <div className="h-fit w-fit bg-black">
      <ReactPlayer
        playing={true}
        url={stream}
        muted={isCurrent}
        height={"200px"}
        width={"200px"}
      />
    </div>
  );
}

export default VidePlayer;
