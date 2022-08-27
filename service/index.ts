import { signin, signout, signup, whoami, saveUserPreferences } from './auth';
import { getEndpoints, getParamsByEndpoint, execute, getTests, getEndpointById, getTestParams } from './request';

// export const url = 'http://localhost:5000/';
export const url = 'https://damp-brook-68706.herokuapp.com/';

export default {
  auth: {
    signin,
    signup,
    signout,
    whoami,
    saveUserPreferences,
  },
  request: {
    getEndpoints,
    getParamsByEndpoint,
    getEndpointById,
    getTests,
    getTestParams,
    execute,
  },
};
