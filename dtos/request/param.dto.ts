export type ParamType = "query" | "param" | "body";

export type ParamDto = {
  id: string;
  userId: string;
  endpointId: string;
  key: string;
  value: string;
  type: ParamType;
};
