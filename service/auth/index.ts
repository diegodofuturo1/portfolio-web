import axios from "axios";
import { message } from "antd";
import { SignInDto } from "../../dtos/signin.dto";
import { SignUpDto } from "../../dtos/signup.dto";

const url = "https://damp-brook-68706.herokuapp.com/";

export const signin = async ({ email, password }: SignInDto) => {
  try {
    if (!email) return message.error("Email é obrigatório!");
    if (!password) return message.error("Senha é obrigatória!");
    const response = await axios.post(url + "auth/signin/", {
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
    if (!name) return message.error("Nome é obrigatório!");
    if (!email) return message.error("Email é obrigatório!");
    if (!password) return message.error("Senha é obrigatória!");
    const response = await axios.post(url + "auth/signup/", {
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
    const { data } = await axios.post(url + "auth/signout/");
    return data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};

export const whoami = async () => {
  try {
    const { data } = await axios.post(url + "auth/whoami/");
    return data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};
