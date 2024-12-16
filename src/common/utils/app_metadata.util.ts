export const setAppMetadataBasedOnUser = (user: any) => {
  const websiteTitleElement = document.getElementById("website_title");
  const websiteFaviconElement = document.getElementById("website_favicon");

  // Checking if the element exists before accessing its innerHTML
  if (websiteTitleElement && websiteFaviconElement) {
    if (user?.name) {
      websiteTitleElement.innerHTML = user.name;
    }
    if (user?.profileImageSrc) {
      websiteFaviconElement.setAttribute("href", user.profileImageSrc);
    }
  }
};
