import { url } from '..';
import axios from 'axios';
import { message } from 'antd';

export const getPortfolio = async () => {
  try {
    const { data } = await axios.get(url + 'portfolio/');
    return data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};

export const getAbouts = async (portfolioId: string) => {
  try {
    const response = await axios.get(url + `portfolio/about?%3AportfolioId=${portfolioId}`);
    return response.data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};

export const getEducation = async (portfolioId: string) => {
  try {
    const response = await axios.get(url + `portfolio/education?%3AportfolioId=${portfolioId}`);
    return response.data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};

export const getExperience = async (portfolioId: string) => {
  try {
    const response = await axios.get(url + `portfolio/experience?%3AportfolioId=${portfolioId}`);
    return response.data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};

export const getSkill = async (experienceId: string) => {
  try {
    const response = await axios.get(url + `portfolio/skill?%3AexperienceId=${experienceId}`);
    return response.data;
  } catch (exception: any) {
    message.error(exception.response.data.message);
  }
};
