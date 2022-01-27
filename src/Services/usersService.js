import { Post, Patch } from "./privateApiService";

const postUser = async (data) => {
  return await Post("/users", data);
};

const updateUser = async (data, user) => {
  return await Patch(`/users/${user.id}`, data);
};

export {postUser, updateUser}