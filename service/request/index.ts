import axios from 'axios';
import { getCookie } from 'cookies-next';
import { url } from '..';
import { EndpointDto } from 'dtos/request/endpoint.dto';
import { ParamDto } from 'dtos/request/param.dto';
import { TestParamDto } from 'dtos/request/test-param.dto';

export const getEndpoints = async () => {
  try {
    const response = await axios.get(url + 'request/endpoint/');
    const endpoints: EndpointDto[] = response.data;
    return endpoints;
  } catch (exception: any) {}
};

export const getEndpointById = async (endpointId: string) => {
  try {
    const response = await axios.get(url + `request/endpoint/${endpointId}`);
    const endpoint: EndpointDto = response.data;
    return endpoint;
  } catch (exception: any) {}
};

export const getTestParams = async (testId: string) => {
  try {
    const response = await axios.get(url + `request/test/param/${testId}`);
    const params: TestParamDto[] = response.data;
    return params;
  } catch (exception: any) {}
};

export const getParamsByEndpoint = async (endpointId: string) => {
  try {
    const response = await axios.get(url + `request/param/byEndpoint/${endpointId}/`);
    const params: ParamDto[] = response.data;
    return params;
  } catch (exception: any) {}
};

export const getTests = async () => {
  try {
    const response = await axios.get(url + `request/test/`);
    const data: any[] = response.data;
    return data;
  } catch (exception: any) {}
};

export const execute = async (endpoint: EndpointDto, params: ParamDto[] | TestParamDto[], token?: string) => {
  const createBody = () => {
    const body: any = {};

    params.forEach((param) => {
      if (param.type === `body`) {
        body[param.key] = param.value;
      }
    });

    return body;
  };

  try {
    let response = { data: {} };
    token = token ? token : getCookie(`token`)?.toString() || ``;
    const options = { headers: { token } };

    switch (endpoint.method) {
      case `GET`:
        response = await axios.get(url + endpoint.path, options);
        break;
      case `POST`:
        response = await axios.post(url + endpoint.path, createBody(), options);
        break;
    }
    return response.data;
  } catch (exception: any) {
    return exception.response.data;
  }
};
