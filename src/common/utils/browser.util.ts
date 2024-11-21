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
