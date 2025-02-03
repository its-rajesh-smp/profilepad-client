import { DEFAULT_USER_IMAGE_SRC } from "@/common/constants/url.const";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({
  src = DEFAULT_USER_IMAGE_SRC,
  className,
  wrapperClassName = "w-full h-full",
}: {
  src?: string;
  className?: string;
  wrapperClassName?: string;
}) => (
  <span className="h-full w-full overflow-hidden">
    <LazyLoadImage
      wrapperClassName={wrapperClassName}
      effect="blur"
      className={`h-full w-full ${className} `}
      src={src}
      onError={(event) => {
        (event.target as HTMLImageElement).src = DEFAULT_USER_IMAGE_SRC;
      }}
    />
  </span>
);

export default LazyImage;
