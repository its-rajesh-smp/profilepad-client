import axiosInterceptors from "@/setup/axios.conf";

export const getGithubProfile = (username: string) => {
  return axiosInterceptors.get(`/third-party/github/${username}`);
};
