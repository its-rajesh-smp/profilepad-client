import LazyImage from "@/common/components/LazyImage/LazyImage";
import { useContext } from "react";
import reactGridLayoutContext from "../../contexts/react-grid-layout.context";
import { ILeftSidebarCard } from "../../types/left-sidebar-item.type";

// Higher-Order Component for common styles and functionality
const withDefaultProps = (Component: React.FC<any>) => {
  return (props: any) => {
    const { onDragStartHandler } = useContext(reactGridLayoutContext);

    const defaultProps: any = {
      className: `droppable-element h-fit w-full rounded-xl cursor-move border bg-white p-3 shadow-sm `,
      draggable: true,
      unselectable: "on",
      onDragStart: (e: any) => {
        e.dataTransfer.setData("application/json", "");
        onDragStartHandler(props?.item?.variant);
      },
    };
    return <Component {...defaultProps} {...props} />;
  };
};

// TitleCard Component
const TitleCard = (props: any) => (
  <div {...props}>
    <p>Title</p>
  </div>
);

// ProfileCard Component
const ProfileCard = (props: any) => (
  <div
    {...props}
    className={`${props.className} flex flex-col items-center justify-center gap-1`}
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

// LinkCard Component
const LinkCard = (props: any) => (
  <div
    {...props}
    className={`${props.className} flex !h-28 !w-28 flex-col gap-1`}
  >
    <div className="w-fit rounded-md border p-0.5 text-2xl">
      {props.item?.icon}
    </div>
    <p className="pl-0.5 text-xs">{props.item.title}</p>
  </div>
);

// Wrapping Components with HOC
const WrappedTitleCard = withDefaultProps(TitleCard);
const WrappedProfileCard = withDefaultProps(ProfileCard);
const WrappedLinkCard = withDefaultProps(LinkCard);

function LeftBarCard({ item }: { item: ILeftSidebarCard }) {
  switch (item.variant) {
    case "title":
      return <WrappedTitleCard item={item} />;
    case "profile":
      return <WrappedProfileCard item={item} />;
    case "link":
      return <WrappedLinkCard item={item} />;
    default:
      return <WrappedProfileCard />;
  }
}

export default LeftBarCard;
