interface IMessageDisplayProps {
  message: string;
  imgSrc?: string;
  imgClassName?: string;
  fitToParent?: boolean;
}

function MessageDisplay({
  message,
  imgSrc,
  imgClassName,
  fitToParent,
}: IMessageDisplayProps) {
  return (
    <div
      className={`user-select-none ${fitToParent ? "" : "absolute"} flex h-full w-full flex-col items-center justify-center gap-5 bg-white`}
    >
      {imgSrc && <img className={`h-20 w-20 ${imgClassName}`} src={imgSrc} />}
      <h3>{message}</h3>
    </div>
  );
}

export default MessageDisplay;
