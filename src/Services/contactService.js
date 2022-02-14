import { Post, Put, Get, Delete } from './privateApiService';

export const postActivityData = async (body) => await Post('/contacts', body);

export const getContactsList = async (id) => await Get('/contacts');

export const getContactDataById = async (id) => await Get(`/contacts/${id}`);

export const updateContactDataById = async (id, body) => await Put(`/contacts/${id}`, body);

export const deleteContactById = async (id) =>  await Delete(`/contacts/${id}`);
