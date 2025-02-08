import axiosInterceptors from "@/setup/axios.conf";

export const getGithubData = async (userName: string) =>
  axiosInterceptors.get(`third-party/github/${userName}`);
