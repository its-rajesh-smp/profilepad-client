interface IMessageDisplayProps {
  message: string;
  imgSrc?: string;
  imgClassName?: string;
}

function MessageDisplay({
  message,
  imgSrc,
  imgClassName,
}: IMessageDisplayProps) {
  return (
    <div className="user-select-none absolute flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      {imgSrc && <img className={`h-20 w-20 ${imgClassName}`} src={imgSrc} />}
      <h3>{message}</h3>
    </div>
  );
}

export default MessageDisplay;
