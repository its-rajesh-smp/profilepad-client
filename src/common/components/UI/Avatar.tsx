import LazyImage from "../LazyImage/LazyImage";
import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "../shadcn/ui/avatar";

interface AvatarProps {
  src?: string;
  fallbackText?: string;
  className?: string;
  lazy?: boolean;
}

function Avatar(props: AvatarProps) {
  if (props.lazy && props.src && props.src !== "") {
    return (
      <LazyImage
        src={props.src || ""}
        className={`${props.className} rounded-full`}
      />
    );
  }

  return (
    <ShadcnAvatar className={props.className}>
      <AvatarImage src={props.src} />
      <AvatarFallback>
        {props.fallbackText
          ?.split(" ")
          .map((word) => word[0])
          .join("")}
      </AvatarFallback>
    </ShadcnAvatar>
  );
}

export default Avatar;
