import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "../shadcn/ui/avatar";

interface AvatarProps extends React.ComponentProps<typeof ShadcnAvatar> {
  src?: string;
}

function Avatar(props: AvatarProps) {
  return (
    <ShadcnAvatar {...props}>
      <AvatarImage src={props.src ?? "https://github.com/shadcn.png"} />
      <AvatarFallback>CN</AvatarFallback>
    </ShadcnAvatar>
  );
}

export default Avatar;
