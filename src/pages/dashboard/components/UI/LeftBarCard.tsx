import LazyImage from "@/common/components/LazyImage/LazyImage";
import { useContext } from "react";
import reactGridLayoutContext from "../../contexts/grid-layout.context";
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
    <div>
      <LazyImage
        wrapperClassName="w-12 h-12"
        className="h-12 w-12 rounded-full object-cover"
      />
    </div>
    <div className="flex flex-col items-center justify-center gap-0.5">
      <p className="text-xs font-semibold text-primary">Rajesh SMP</p>
      <p className="text-xxs text-primary">Creator @ ProfilePad.io </p>
    </div>
  </div>
);

// ImageCard Component
const ImageCard = (props: any) => (
  <div
    {...props}
    className={`${props.className} flex !h-28 !w-28 flex-col gap-1`}
  >
    <LazyImage
      wrapperClassName="h-full w-full"
      className="h-full w-full select-none object-cover"
    />
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

const TextCard = (props: any) => (
  <div
    {...props}
    className={`${props.className} flex !h-28 !w-28 flex-col gap-1`}
  >
    <p>Hi there!</p>
  </div>
);

// Wrapping Components with HOC
const WrappedTitleCard = withDefaultProps(TitleCard);
const WrappedProfileCard = withDefaultProps(ProfileCard);
const WrappedLinkCard = withDefaultProps(LinkCard);
const WrappedImageCard = withDefaultProps(ImageCard);
const WrappedTextCard = withDefaultProps(TextCard);

function LeftBarCard({ item }: { item: ILeftSidebarCard }) {
  switch (item.variant) {
    case "title":
      return <WrappedTitleCard item={item} />;
    case "profileHeadline":
      return <WrappedProfileCard item={item} />;
    case "link":
      return <WrappedLinkCard item={item} />;
    case "image":
      return <WrappedImageCard item={item} />;
    case "text":
      return <WrappedTextCard item={item} />;
    default:
      return <WrappedProfileCard />;
  }
}

export default LeftBarCard;
