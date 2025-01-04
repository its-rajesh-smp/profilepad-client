import GithubHitmap from "@/common/components/github/github-heatmap/GithubHitmap";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { NumberTicker } from "@/common/components/UI/NumberTracker";
import {
  extractBaseUrl,
  getGithubUsernameFromUrl,
} from "@/common/utils/url.util";
import { getGithubProfile } from "@/pages/dashboard/services/third-party.service";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useCurrentCardLayoutSize from "../../../hooks/useCurrentCardLayoutSize";
import { updateLayoutItem } from "../../../services/layout-item.service";
import {
  IDashboardCard,
  TCardLayoutStyle,
} from "../../../types/dashboard.type";
import VisitWebsite from "../../UI/VisitWebsite";
import WebsiteIcon from "../../UI/WebsiteIcon";

function GithubProfileCard({ url, text, id }: IDashboardCard) {
  const domain = extractBaseUrl(url ?? "");
  const currentLayoutStyle: TCardLayoutStyle = useCurrentCardLayoutSize(id);
  const githubUsername = getGithubUsernameFromUrl(url);
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    getGithubProfileData();
  }, [githubUsername]);

  /**
   * Fetches the github contributions data for the given github username
   * and stores it in the state. If the request fails, it will show an error
   * toast.
   */
  async function getGithubProfileData() {
    if (!githubUsername) return;
    try {
      const data = await getGithubProfile(githubUsername);
      const rawContributions = data?.data?.weeks;

      const refactoredContributions: any = [];
      rawContributions.forEach((week: any) => {
        week.contributionDays.forEach((day: any) => {
          refactoredContributions.push({
            color: day.color,
            count: day.contributionCount,
            date: day.date,
          });
        });
      });

      setContributions(refactoredContributions);
      setTotalContributions(data?.data?.totalContributions);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch github profile");
    }
  }

  switch (currentLayoutStyle) {
    case "SMALL_SQUARE":
      return (
        <div className={`flex h-full w-full flex-col gap-2 p-3`}>
          <div className="flex items-center justify-between">
            <WebsiteIcon domain={domain} />
            <VisitWebsite url={url} />
          </div>
          <AutoSaveTextField
            onChange={updateLayoutItem}
            fieldToUpdate="text"
            className="h-fit text-sm"
            id={id}
          >
            {text ? text : githubUsername ? githubUsername : domain}
          </AutoSaveTextField>
          <p className="text-xs text-zinc-500">{githubUsername}</p>
        </div>
      );

    case "HORIZONTAL_RECTANGLE":
      return (
        <div className={`flex h-full w-full items-center gap-4 p-3`}>
          <WebsiteIcon domain={domain} />

          <AutoSaveTextField
            onChange={updateLayoutItem}
            fieldToUpdate="text"
            className="flex items-center text-sm"
            id={id}
          >
            {text ? text : githubUsername ? githubUsername : domain}
          </AutoSaveTextField>
          <VisitWebsite url={url} />
        </div>
      );

    case "HORIZONTAL_WIDE_RECTANGLE":
      return (
        <div className="flex h-full w-full justify-between gap-3 p-3">
          <div className={`flex w-[50%] flex-col justify-between`}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <WebsiteIcon domain={domain} />
                <p className="text-xs text-zinc-500">{githubUsername}</p>
              </div>

              <AutoSaveTextField
                onChange={updateLayoutItem}
                fieldToUpdate="text"
                className="!h-fit text-sm"
                id={id}
              >
                {text ? text : githubUsername ? githubUsername : domain}
              </AutoSaveTextField>
            </div>
            <VisitWebsite text="Follow" type="button" url={url} />
          </div>

          <div className="relative h-full w-[50%]">
            <div>
              <NumberTicker className="text-4xl" value={totalContributions} />
              <p className="text-xs text-zinc-500">
                contributions in the last year
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <GithubHitmap dataPoints={contributions} />
            </div>
          </div>
        </div>
      );

    case "VERTICAL_RECTANGLE":
      return (
        <div className="flex h-full w-full flex-col justify-between gap-3 p-3">
          <div className={`flex flex-col gap-3`}>
            <div className="flex items-center justify-between gap-5">
              <WebsiteIcon domain={domain} />
              <VisitWebsite url={url} />
            </div>

            <div>
              <AutoSaveTextField
                onChange={updateLayoutItem}
                fieldToUpdate="text"
                className="!h-fit text-sm"
                id={id}
              >
                {text ? text : githubUsername ? githubUsername : domain}
              </AutoSaveTextField>
              <p className="text-xs text-zinc-500">{githubUsername}</p>
            </div>
          </div>

          <GithubHitmap dataPoints={contributions} />
        </div>
      );

    case "LARGE_SQUARE":
      return (
        <div className="flex h-full w-full flex-col justify-between gap-3 p-3">
          <div className={`flex flex-col gap-3`}>
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2">
                <WebsiteIcon domain={domain} />
                <p className="text-xs text-zinc-500">{githubUsername}</p>
              </div>
              <VisitWebsite text="Follow" type="button" url={url} />
            </div>

            <AutoSaveTextField
              onChange={updateLayoutItem}
              fieldToUpdate="text"
              className="!h-fit text-sm"
              id={id}
            >
              {text ? text : githubUsername ? githubUsername : domain}
            </AutoSaveTextField>
          </div>
          <div className="relative flex w-full flex-col gap-2">
            <GithubHitmap dataPoints={contributions} />
            <div className="flex items-center gap-1 text-xs text-zinc-500">
              <NumberTicker
                className="font-medium text-zinc-500 dark:text-zinc-100"
                value={totalContributions}
              />
              <p>contributions in the last year</p>
            </div>
          </div>
        </div>
      );
  }
}

export default GithubProfileCard;
