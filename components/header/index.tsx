import service from 'service';
import colors from 'utils/colors';
import { Affix, Avatar, Row } from 'antd';
import { Dispatcher } from 'store/dispathers';
import LoginComponent from 'components/login';
import { PortifolioState } from 'store/reducers';
import { CSSProperties, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { UserOutlined, TrophyOutlined } from '@ant-design/icons';

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  header: CSSProperties = {
    padding: '10px 20px',
    color: colors.white,
    backgroundColor: colors[this.color][9],
  };

  trophy: CSSProperties = {
    color: colors[this.color][5],
    fontSize: '1.8EM',
    margin: '0px 10px',
  };

  loginLink: CSSProperties = {
    color: colors[this.color][4],
    margin: '0px 20px',
  };
}

const HeaderComponent = () => {
  const {
    theme: { color },
    user: { currentUser, drawer },
  } = useSelector((state: PortifolioState) => state);

  const style = new Style(color);
  const dispatcher = new Dispatcher(useDispatch());

  useEffect(() => {
    if (!currentUser) {
      const execute = async () => {
        const response = await service.auth.whoami();
        if (response) {
          dispatcher.user.currentUserChange(response.data);
        }
      };
      execute();
    }
  }, []);

  return (
    <Affix>
      <Row align="middle" justify="space-between" style={style.header}>
        <Row align="middle" justify="center">
          <TrophyOutlined style={style.trophy} />
          Meu Portfólio
        </Row>
        <Row align="middle">
          <a style={style.loginLink} onClick={() => dispatcher.user.openDrawer()}>
            {currentUser?.id ? currentUser.name : 'SignIn'}
          </a>
          <Avatar src={currentUser?.avatar} size={32} icon={<UserOutlined />} />
        </Row>
        <LoginComponent visible={drawer} setVisible={dispatcher.user.closeDrawer} />
      </Row>
    </Affix>
  );
};

export default HeaderComponent;
