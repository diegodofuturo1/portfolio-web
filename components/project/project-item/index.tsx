import Router from 'next/router';
import colors from 'utils/colors';
import Meta from 'antd/lib/card/Meta';
import { useSelector } from 'react-redux';
import { Badge, Card, Col, Row } from 'antd';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { CSSProperties, useEffect, useState } from 'react';

const colSpan = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 8 },
  xxl: { span: 8 },
};

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  col: CSSProperties = {
    padding: '5px 20px 5px 0px',
    height: '100%',
    transition: 'color .3s ease-in-out, box-shadow .3s ease-in-out',
  };
}

interface ProjectItemComponentProps {
  title: string;
  badge: string | React.ReactElement;
  route?: string;
  discription: string;
  onClick?: () => void;
}

const ProjectItemComponent = (props: ProjectItemComponentProps) => {
  const { route, title, discription, badge, onClick } = props;

  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  const style = new Style(color);
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    if (redirect) Router.push(redirect);
    setRedirect('');
  }, [redirect]);

  return (
    <Col {...colSpan} style={style.col}>
      <Badge.Ribbon text={badge} color={colors[color][5]}>
        <Card
          hoverable
          onClick={() => (route ? setRedirect(route) : onClick ? onClick() : undefined)}
          style={{
            backgroundColor: colors[color][7],
            border: `1px solid ${colors[color][6]}`,
            borderLeft: `10px solid ${colors[color][5]}`,
            minHeight: '120px',
          }}
          bodyStyle={{}}
        >
          <Meta
            title={<Row style={{ color: colors[color][2] }}>{title}</Row>}
            description={<Row style={{ color: colors[color][2] }}>{discription}</Row>}
          />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
};

export default ProjectItemComponent;
