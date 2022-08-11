import { EndpointDto } from "../../dtos/request/endpoint.dto";
import { ParamDto } from "../../dtos/request/param.dto";
import {
  RequestApiActionType,
  SaveParamValue,
  SAVE_ENDPOINTS,
  SAVE_PARAM_VALUE,
} from "../actions/request-api.action";

export interface RequestApiState {
  endpoints: EndpointDto[];
}

export interface RequestApiAction {
  payload: Partial<RequestApiState>;
  type: RequestApiActionType;
}

const initialState: RequestApiState = {
  endpoints: [],
};

const requestReducer = (
  state: RequestApiState = initialState,
  action: RequestApiAction
): RequestApiState => {
  switch (action.type) {
    case SAVE_ENDPOINTS:
      return { ...state, endpoints: action.payload.endpoints || [] };

    case SAVE_PARAM_VALUE:
      const { endpointId, paramId, value } = action.payload as SaveParamValue;

      const handlerParams = (param: ParamDto) => {
        if (param && param.id == paramId) {
          param.value = value;
        }
        return param;
      };

      const handlerEndpoints = (endpoint: EndpointDto) => {
        if (endpoint && endpoint.id == endpointId) {
          endpoint.params.map(handlerParams);
        }

        return endpoint;
      };

      if (state.endpoints) {
        return { ...state, endpoints: state.endpoints.map(handlerEndpoints) };
      }
      return state;
    default:
      return state;
  }
};

export default requestReducer;
