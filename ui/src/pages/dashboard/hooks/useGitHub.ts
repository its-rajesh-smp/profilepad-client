import {
  getGithubUsernameFromUrl,
  isValidGithubProfileUrl,
} from "@/common/utils/url.util";
import { useEffect, useState } from "react";
import { getGithubData } from "../services/third-party.service";

function useGitHub(href: string) {
  const [githubData, setGithubData] = useState<any>(null);
  if (!href) return null;
  const isGithubProfileUrl = isValidGithubProfileUrl(href);
  if (!isGithubProfileUrl) return null;

  const githubUsername = getGithubUsernameFromUrl(href);
  if (!githubUsername) return null;

  useEffect(() => {
    (async () => {
      try {
        const data = await getGithubData(githubUsername);
        setGithubData(data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [href]);

  return githubData;
}

export default useGitHub;
