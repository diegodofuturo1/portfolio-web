import { CSSProperties } from 'react';
import { ThemeColor } from 'store/reducers/theme.reducer';
import colors from 'utils/colors';

export default class Style {
  constructor(private readonly color: ThemeColor, private readonly hover: boolean) {}

  col: CSSProperties = {
    padding: '5px',
    backgroundColor: colors[this.color][6],
  };

  row: CSSProperties = {
    boxShadow: this.hover ? '1px 1px 6px 0px black' : '1px 1px 2px 0px black',
    cursor: 'pointer',
    backgroundColor: colors[this.color][4],
  };
}
