import { isValidGithubProfileUrl } from "@/common/utils/url.util";
import { IDashboardCard } from "@/pages/dashboard/types/dashboard.type";
import DefaultLinkCard from "./DefaultLinkCard";
import GithubProfileCard from "./GithubProfileCard";

function LinkCardBase(props: IDashboardCard) {
  const { url } = props;

  if (isValidGithubProfileUrl(url)) {
    return <GithubProfileCard {...props} />;
  }

  return <DefaultLinkCard {...props} />;
}

export default LinkCardBase;
