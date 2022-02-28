import { CreateUserDto } from './createUserDto';
import axios, { AxiosResponse } from 'axios';
import { setAxiosAuthToken, setLocalStorageToken } from '../../utils/authUtils';
import { IUser } from '../../models';

export const registerUser = async (model: CreateUserDto): Promise<AxiosResponse<{ success: boolean }>> => {
  const res = await axios({
    method: 'POST',
    url: 'api/auth/signup',
    data: model,
  });

  setAxiosAuthToken(res.data.token);
  setLocalStorageToken(res.data.token);
  return res;
};

export const loginUser = async (model: { email: string, password: string }): Promise<AxiosResponse<{ token: string }>> => {
  const res = await axios({
    method: 'POST',
    url: 'api/auth/signin',
    data: model,
  });

  setAxiosAuthToken(res.data.token);
  setLocalStorageToken(res.data.token);
  return res;
};

export const getProfile = async (token: string): Promise<AxiosResponse<IUser>> => {
  setAxiosAuthToken(token);
  return axios({
    method: 'GET',
    url: '/api/users/me',
    headers: {
      Autorization: `Bearer ${token}`,
    },
  });
};