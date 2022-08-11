import { ParamDto } from "./param.dto";

export type EndpointDto = {
  id: string;
  userId: string;
  name: string;
  path: string;
  method: string;
  permission: string;
  params: ParamDto[];
};
