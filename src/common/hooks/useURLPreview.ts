import React, { useEffect } from "react";
import { getURLPreview } from "../utils/browser.util";
import { isValidGithubProfileUrl } from "../utils/url.util";

type TWebsiteType = "github" | "default";

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
  const websiteType: TWebsiteType = isValidGithubProfileUrl(src)
    ? "github"
    : "default";
  const websitePublisher = data?.publisher || null;
  const websiteTitle = data?.title || null;

  return {
    websiteLogoUrl,
    websitePreviewUrl,
    websiteType,
    websitePublisher,
    websiteTitle,
  };
}

export default useWebsiteData;
