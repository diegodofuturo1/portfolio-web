import { url } from '..';
import axios from 'axios';
import { message } from 'antd';
import { getCookie } from 'cookies-next';
import { SignInDto } from 'dtos/auth/signin.dto';
import { SignUpDto } from 'dtos/auth/signup.dto';
import { ThemeColor } from 'store/reducers/theme.reducer';

export const signin = async ({ email, password }: SignInDto) => {
  try {
    if (!email) return message.error('Email é obrigatório!');
    if (!password) return message.error('Senha é obrigatória!');
    const response = await axios.post(url + 'auth/signin/', {
      email,
      password,
    });
    return response.data.data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};

export const signup = async ({ email, password, name }: SignUpDto) => {
  try {
    if (!name) return message.error('Nome é obrigatório!');
    if (!email) return message.error('Email é obrigatório!');
    if (!password) return message.error('Senha é obrigatória!');
    const response = await axios.post(url + 'auth/signup/', {
      email,
      password,
      name,
    });
    return response.data.data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};

export const signout = async () => {
  try {
    const { data } = await axios.post(url + 'auth/signout/');
    return data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};

export const whoami = async () => {
  const token = getCookie(`token`)?.toString();

  if (!token) return;

  const options = { headers: { token } };
  try {
    const { data } = await axios.get(url + 'auth/whoami/', options);
    return data;
  } catch {}
};

export const saveUserPreferences = async (theme: ThemeColor) => {
  const token = getCookie(`token`)?.toString();

  if (!token) return;

  const options = { headers: { token } };

  try {
    const { data } = await axios.put(url + 'auth/preferences/', { theme }, options);
    return data;
  } catch {}
};
