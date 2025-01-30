import { BiLogoGithub, BiUser } from "react-icons/bi";
import { ILeftSidebarCard } from "../types/left-sidebar-item.type";

export const leftSidebarCards: ILeftSidebarCard[][] = [
  [
    {
      variant: "title",
    },
  ],
  [
    {
      variant: "profileHeadline",
    },
  ],
  [
    {
      variant: "link",
      title: "Link",
      icon: <BiUser />,
    },
    {
      variant: "link",
      title: "Github",
      icon: <BiLogoGithub />,
    },
  ],
];
