import { EndpointDto } from "../../dtos/request/endpoint.dto";

export const SAVE_ENDPOINTS = "SAVE_ENDPOINTS";
export const SAVE_PARAM_VALUE = "SAVE_PARAM_VALUE";

export type RequestApiActionType = "SAVE_ENDPOINTS" | "SAVE_PARAM_VALUE";

export const saveEndpoints = (endpoints: EndpointDto[]) => ({
  type: SAVE_ENDPOINTS,
  payload: { endpoints },
});

export interface SaveParamValue {
  endpointId: string;
  paramId: string;
  value: string;
}

export const saveParamValue = (payload: SaveParamValue) => ({
  type: SAVE_PARAM_VALUE,
  payload,
});
