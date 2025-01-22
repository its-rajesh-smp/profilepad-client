import LazyImage from "@/common/components/LazyImage/LazyImage";
import { ILeftSidebarItem } from "../../types/left-sidebar-items.types";

const defaultProps: any = {
  className:
    "droppable-element h-fit w-full rounded-xl cursor-move border  bg-white p-3 shadow-sm ",
  draggable: true,
  unselectable: "on",
  onDragStart: (e: any) => e.dataTransfer.setData("application/json", ""),
};

const TitleCard = () => {
  return (
    <div {...defaultProps}>
      <p>Title</p>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div
      {...defaultProps}
      className={` ${defaultProps.className} flex flex-col items-center justify-center gap-1`}
    >
      <LazyImage
        wrapperClassName="w-12 h-12"
        className="h-12 w-12 rounded-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs font-semibold">John Doe</p>
        <p className="text-xs">Founder unicorspartup.com</p>
      </div>
    </div>
  );
};

const LinkCard = ({ item }: { item: ILeftSidebarItem }) => {
  return (
    <div
      {...defaultProps}
      className={` ${defaultProps.className} flex h-28 w-28 flex-col gap-1`}
    >
      <div className="w-fit rounded-md border p-0.5 text-2xl">{item?.icon}</div>
      <p className="pl-0.5 text-xs">{item.title}</p>
    </div>
  );
};

function LeftBarCard({ item }: { item: ILeftSidebarItem }) {
  switch (item.variant) {
    case "title":
      return <TitleCard />;
    case "profile":
      return <ProfileCard />;
    case "link":
      return <LinkCard item={item} />;
    default:
      return <ProfileCard />;
  }
}

export default LeftBarCard;
