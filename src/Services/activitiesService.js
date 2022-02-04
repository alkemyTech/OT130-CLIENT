import { Post, Put, Get } from './privateApiService';

export const getActivityDataById = async (id) => await Get(`activities/${id}`);

export const updateActivityDataById = async (id, body) => await Put(`activities/${id}`, body);

export const saveActivityData = async (body) => await Post('activities', body);
