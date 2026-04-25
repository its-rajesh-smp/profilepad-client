export const extractBaseUrl = (url: string) => {
  try {
    const { protocol, hostname } = new URL(url);
    return `${protocol}//${hostname}`;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null; // or handle the error as needed
  }
};

export const getGithubUsernameFromUrl = (
  url: string | undefined,
): string | null => {
  if (!url) return null;

  const urlParts = url.split("/");
  const isGitHub = url.includes("github.com");
  const hasGitHubUsername = urlParts.length === 4;
  const isProfileOnly = url.endsWith("/" + urlParts[3]);

  if (isGitHub && hasGitHubUsername && isProfileOnly) {
    return urlParts[3];
  }

  return null;
};

export const isValidGithubProfileUrl = (url: string | undefined): boolean => {
  if (!url) return false;

  const isGitHub = url.includes("github.com");
  const hasGitHubUsername = url.split("/").length === 4; // Ensures there is a username part after "github.com" and nothing after that
  const isProfileOnly = url.endsWith("/" + url.split("/")[3]);

  return isGitHub && hasGitHubUsername && isProfileOnly;
};
