import axios from "axios";
import { MICROLINK_IMAGE_SRC } from "../constants/url.const";

export const getURLPreview = async (url: string | undefined) => {
  try {
    if (!url) return;
    const data = await axios.get(`${MICROLINK_IMAGE_SRC}/?url=${url}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSubdomain = () => {
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length > 1) {
    return parts[0];
  }
  return null;
};
