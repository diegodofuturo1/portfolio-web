import axios from 'axios';
import { getCookie } from 'cookies-next';
import { url } from '..';
import { EndpointDto } from 'dtos/request/endpoint.dto';
import { ParamDto } from 'dtos/request/param.dto';

export const getEndpoints = async () => {
  try {
    const response = await axios.get(url + 'request/endpoint/');
    const endpoints: EndpointDto[] = response.data;
    return endpoints;
  } catch (exception: any) {}
};

export const getParamsByEndpoint = async (endpointId: string) => {
  try {
    const response = await axios.get(url + `request/param/byEndpoint/${endpointId}/`);
    const params: ParamDto[] = response.data;
    return params;
  } catch (exception: any) {}
};

export const execute = async (endpoint: EndpointDto, params: ParamDto[]) => {
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
    const token = getCookie(`token`)?.toString() || ``;
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
