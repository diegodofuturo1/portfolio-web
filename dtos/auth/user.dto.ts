import { ThemeColor } from 'store/reducers/theme.reducer';

export type UserDto = {
  email: string;
  id: string;
  name: string;
  avatar: string;
  token: string;
  theme: ThemeColor;
};
