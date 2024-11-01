export const extractBaseUrl = (url: string) => {
  try {
    const { protocol, hostname } = new URL(url);
    return `${protocol}//${hostname}`;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null; // or handle the error as needed
  }
};
