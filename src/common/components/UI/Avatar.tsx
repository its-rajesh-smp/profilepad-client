import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "../shadcn/ui/avatar";

interface AvatarProps {
  src?: string;
  fallbackText?: string;
  className?: string;
}

function Avatar(props: AvatarProps) {
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
