import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({
  src = "https://media.licdn.com/dms/image/v2/D4D03AQEZ40MUfPqLXA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1688566592382?e=1743638400&v=beta&t=ub9zx3E6h-4J-yr-SiTtibCpfVbYzY4b1lDtsXtOkhs",
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
      className={className}
      src={src}
    />
  </span>
);

export default LazyImage;
