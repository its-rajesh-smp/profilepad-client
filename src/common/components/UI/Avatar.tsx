import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "../shadcn/ui/avatar";

function Avatar(props: React.ComponentProps<typeof ShadcnAvatar>) {
  return (
    <ShadcnAvatar {...props}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </ShadcnAvatar>
  );
}

export default Avatar;
