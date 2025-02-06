import { GridItemColorStyles } from "../types/dashboard-item.type";

export const gridItemColorVariants: Record<string, GridItemColorStyles> = {
  blue: {
    backgroundColor: "bg-blue-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-blue-100",
    iconColor: "text-white",
    borderColor: "border-white",
  },
  black: {
    backgroundColor: "bg-black",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-gray-400",
    iconColor: "text-white",
    borderColor: "border-white",
  },
  red: {
    backgroundColor: "bg-red-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-red-100",
    iconColor: "text-white",
    borderColor: "border-red-700",
  },
  white: {
    backgroundColor: "bg-white",
    primaryTextColor: "text-black",
    secondaryTextColor: "text-gray-600",
    iconColor: "text-gray-400",
    borderColor: "border-gray-300",
  },
  green: {
    backgroundColor: "bg-green-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-green-100",
    iconColor: "text-white",
    borderColor: "border-green-700",
  },
  purple: {
    backgroundColor: "bg-purple-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-purple-100",
    iconColor: "text-white",
    borderColor: "border-purple-700",
  },
  orange: {
    backgroundColor: "bg-orange-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-orange-100",
    iconColor: "text-white",
    borderColor: "border-orange-700",
  },
  teal: {
    backgroundColor: "bg-teal-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-teal-100",
    iconColor: "text-white",
    borderColor: "border-teal-700",
  },

  gradientBluePurple: {
    backgroundColor: "bg-gradient-to-r from-blue-500 to-purple-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-blue-100",
    iconColor: "text-white",
    borderColor: "border-white",
  },
  gradientPinkOrange: {
    backgroundColor: "bg-gradient-to-r from-pink-500 to-orange-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-pink-100",
    iconColor: "text-white",
    borderColor: "border-white",
  },
  gradientGreenTeal: {
    backgroundColor: "bg-gradient-to-r from-green-500 to-teal-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-green-100",
    iconColor: "text-white",
    borderColor: "border-white",
  },
  gradientRedYellow: {
    backgroundColor: "bg-gradient-to-r from-red-500 to-yellow-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-red-100",
    iconColor: "text-white",
    borderColor: "border-white",
  },
  gradientSunset: {
    backgroundColor: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-yellow-100",
    iconColor: "text-white",
    borderColor: "border-yellow-500",
  },
  gradientOcean: {
    backgroundColor: "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-teal-100",
    iconColor: "text-white",
    borderColor: "border-teal-500",
  },
  gradientAurora: {
    backgroundColor:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-indigo-100",
    iconColor: "text-white",
    borderColor: "border-indigo-500",
  },
  gradientNeon: {
    backgroundColor:
      "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500",
    primaryTextColor: "text-white",
    secondaryTextColor: "text-blue-200",
    iconColor: "text-white",
    borderColor: "border-purple-500",
  },
};
