import { BiLogoGithub, BiUser } from "react-icons/bi";
import { ILeftSidebarItem } from "../types/left-sidebar-items.types";

export const LEFT_SIDEBAR_ITEMS: ILeftSidebarItem[][] = [
  [
    {
      h: 1,
      w: 100,
      id: "title",
      variant: "title",
    },
  ],
  [
    {
      h: 1,
      w: 100,
      id: "profile",
      variant: "profile",
    },
  ],
  [
    {
      h: 1,
      w: 100,
      id: "link",
      variant: "link",
      title: "Link",
      icon: <BiUser />,
    },
    {
      h: 1,
      w: 100,
      id: "github",
      variant: "link",
      title: "Github",
      icon: <BiLogoGithub />,
    },
  ],
];
