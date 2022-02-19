import { Post } from './privateApiService';

export const postAuthRegister = async (body) => await Post('/register', body);

export const postAuthLogin = async (body) => await Post('/login', body);
