import React, { useEffect } from "react";
import { getURLPreview } from "../utils/browser.util";

function useWebsiteData(src: string) {
  const [data, setData] = React.useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getURLPreview(src);
        setData(res?.data?.data);
      } catch (error) {
        setData(null);
      }
    })();
  }, [src]);

  const websiteLogoUrl = data?.logo?.url || null;
  const websitePreviewUrl = data?.image?.url || null;

  return { websiteLogoUrl, websitePreviewUrl };
}

export default useWebsiteData;
