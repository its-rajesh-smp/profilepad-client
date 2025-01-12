export const getProfilePositionClassName = (pos: string) => {
  switch (pos) {
    case "left":
      return "lg:flex-row";
    case "right":
      return "lg:flex-row-reverse";
    case "top":
      return "lg:flex-col items-center ";
    default:
      return "";
  }
};
