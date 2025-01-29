import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({
  src,
  className,
  wrapperClassName = "w-full h-full",
}: {
  src: string;
  className?: string;
  wrapperClassName?: string;
}) => (
  <span className="h-full w-full overflow-hidden">
    <LazyLoadImage
      wrapperClassName={wrapperClassName}
      effect="blur"
      className={className}
      src={src}
    />
  </span>
);

export default LazyImage;
