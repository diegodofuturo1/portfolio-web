import { CSSProperties } from 'react';
import { Comment, Avatar, Row } from 'antd';
import { useSelector } from 'react-redux';
import { ThemeColor } from 'store/reducers/theme.reducer';
import colors from 'utils/colors';
import { AboutDto } from 'dtos/portfolio';
import Foreach from 'components/utils/Foreach';

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  layout: CSSProperties = {
    height: '80vh',
    backgroundColor: colors[this.color][6],
  };

  about: CSSProperties = {
    width: '80%',
    margin: '10px auto',
    backgroundColor: colors[this.color][7],
    padding: '0px 20px',
    color: colors[this.color][2],
    border: `1px solid ${colors[this.color][6]}`,
    borderLeft: `12px solid ${colors[this.color][5]}`,
  };

  textcolor: CSSProperties = {
    color: colors[this.color][4],
    fontSize: '1.2EM',
  };
}

export interface AboutComponentProps {
  abouts: AboutDto[];
}

const AboutComponent = (props: AboutComponentProps) => {
  const { color } = useSelector((state: any) => state.theme);

  const style = new Style(color);

  const render = (about: AboutDto, index: number) => {
    return (
      <Comment
        key={`portfolio-about-${index}`}
        style={style.about}
        content={<Row style={{ textAlign: `justify` }}>{about.content}</Row>}
        datetime={<span style={style.textcolor}>{about.title}</span>}
      />
    );
  };

  return <Foreach dataSource={props.abouts} map={render} />;
};

export default AboutComponent;
