import axiosInterceptors from "@/setup/axios.conf";

export const createBlog = (data: any) =>
  axiosInterceptors.post("/blog/create", data);

export const getBlogs = () => axiosInterceptors.get("/blog/all");
export const getABlog = (id: string) => axiosInterceptors.get(`/blog/${id}`);

export const deleteBlog = (id: string) =>
  axiosInterceptors.delete(`/blog/delete/${id}`);

export const updateBlog = (id: string, data: any) =>
  axiosInterceptors.patch(`/blog/update/${id}`, { data });
