import { Post, Patch, Get, Delete } from './privateApiService';

const addUser = async (values) => {
  return await Post('/users', values);
};

const updateUser = async (values, user) => {
  return Patch(`/users/${user.id}`, values);
};

const getUser = async (id) => {
  return await Get(`/users/${id}`);
};

const getUsers = async () => {
  return await Get(`/users`);
};

const deleteUser = async (id) => {
  return await Delete(`/users/${id}`);
};

export { addUser, deleteUser, getUser, getUsers, updateUser };
