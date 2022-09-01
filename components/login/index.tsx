import service from 'service';
import colors from 'utils/colors';
import { ApplicationState } from 'store/reducers';
import { CSSProperties, ReactElement, useEffect, useState } from 'react';
import { CloseOutlined, SaveOutlined, LoadingOutlined, LoginOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { Dispatcher } from 'store/dispathers';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Drawer, Input, message, Row, Image } from 'antd';
import { ThemeColor } from 'store/reducers/theme.reducer';

class Style {
  constructor(private readonly color: ThemeColor = 'gray', private readonly mode: 'SignIn' | 'SignUp' | 'SignOut') {}

  icon: CSSProperties = {
    color: colors[this.color][2],
  };

  title: CSSProperties = {
    color: colors[this.color][2],
    fontWeight: 'bold',
  };

  drawerBody: CSSProperties = {
    backgroundColor: colors[this.color][7],
  };

  drawerHeader: CSSProperties = {
    backgroundColor: colors[this.color][9],
    color: colors[this.color][2],
    borderBottom: `5px solid ${colors[this.color][6]}`,
  };

  input: CSSProperties = {
    backgroundColor: colors[this.color][5],
    border: `3x solid ${colors[this.color][4]}`,
    marginBottom: '20px',
  };

  label: CSSProperties = {
    fontSize: '1.1EM',
    fontWeight: 'bold',
    color: colors[this.color][2],
  };

  button: CSSProperties = {
    color: colors[this.color][3],
    backgroundColor: colors[this.color][7],
    border: `3x solid ${colors[this.color][4]}`,
    width: '100%',
    margin: '20px 0px',
  };

  menu: CSSProperties = {
    backgroundColor: colors[this.color][8],
    color: colors[this.color][3],
    padding: '10px 0px',
    cursor: 'pointer',
    border: `1px solid ${colors[this.color][7]}`,
  };

  menuSignIn: CSSProperties = {
    ...this.menu,
    borderBottom: this.mode == 'SignIn' ? `5px solid ${colors[this.color][5]}` : undefined,
  };

  menuSignUp: CSSProperties = {
    ...this.menu,
    borderBottom: this.mode == 'SignUp' ? `5px solid ${colors[this.color][5]}` : undefined,
  };

  userInfo: CSSProperties = {
    color: colors[this.color][4],
    fontSize: '1.1EM',
    fontWeight: 'bold',
  };
}

interface LoginComponentProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const LoginComponent = (props: LoginComponentProps) => {
  const { visible, setVisible } = props;

  const {
    theme: { color },
    user: { currentUser },
  } = useSelector((state: ApplicationState) => state);

  const dispatcher = new Dispatcher(useDispatch());

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState<ReactElement>(<SaveOutlined />);
  const [mode, setMode] = useState<'SignIn' | 'SignUp' | 'SignOut'>(currentUser ? 'SignOut' : 'SignIn');

  useEffect(() => {
    if (loading) return setIcon(<LoadingOutlined />);

    switch (mode) {
      case 'SignIn':
        return setIcon(<LoginOutlined />);
      case 'SignUp':
        return setIcon(<UserAddOutlined />);
      case 'SignOut':
        return setIcon(<LogoutOutlined />);
    }
  }, [mode, loading]);

  const style = new Style(color, mode);

  const signin = async () => {
    setLoading(true);
    const user = await service.auth.signin({ email, password });
    if (user?.name) {
      dispatcher.user.currentUserChange(user);

      if (user.theme) {
        dispatcher.theme.colorChange(user.theme);
      }

      message.success('Bem vindo ' + user.name);
      setVisible(false);
    }
    setLoading(false);
  };

  const signup = async () => {
    setLoading(true);
    const user = await service.auth.signup({ email, password, name });
    if (user?.name) {
      dispatcher.user.currentUserChange(user);
      message.success('Bem vindo ' + user.name);
      setVisible(false);
    }
    setLoading(false);
  };

  const signout = async () => {
    setLoading(true);
    await service.auth.signout();
    dispatcher.user.currentUserExit();
    setVisible(false);
    message.warning('Saiu');
    setLoading(false);
  };

  return (
    <Drawer
      visible={visible}
      closeIcon={<CloseOutlined style={style.icon} />}
      onClose={() => setVisible(!visible)}
      title={<Row style={style.title}>{mode}</Row>}
      drawerStyle={style.drawerBody}
      headerStyle={style.drawerHeader}
    >
      <Row hidden={!!currentUser}>
        <Col span={12}>
          <Row justify="center" onClick={() => setMode('SignIn')} style={style.menuSignIn}>
            SignIn
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center" onClick={() => setMode('SignUp')} style={style.menuSignUp}>
            SignUp
          </Row>
        </Col>
      </Row>
      <Col hidden={!!currentUser} style={{ padding: '10px 20px', backgroundColor: colors[color][6] }}>
        <Row hidden={mode == 'SignIn'} style={style.label}>
          Name
        </Row>
        <Input
          value={name}
          hidden={mode == 'SignIn'}
          onChange={(event) => setName(event.target.value)}
          type="name"
          size="small"
          style={style.input}
        />

        <Row style={style.label}>Email</Row>
        <Input value={email} onChange={(event) => setEmail(event.target.value)} size="small" type="email" style={style.input} />

        <Row style={style.label}>Password</Row>
        <Input value={password} onChange={(event) => setPassword(event.target.value)} type="password" size="small" style={style.input} />
      </Col>
      <Col hidden={!currentUser}>
        <Row style={style.userInfo}>Nome: {currentUser?.name}</Row>
        <Row style={style.userInfo}>Email: {currentUser?.email}</Row>
        <Row style={style.userInfo}>Id: {currentUser?.id}</Row>
        <Image src={currentUser?.avatar} />
      </Col>
      <Button style={style.button} onClick={currentUser ? signout : mode == 'SignIn' ? signin : signup}>
        {icon}
        {currentUser ? 'SignOut' : mode == 'SignIn' ? 'Entrar' : 'Cadastrar'}
      </Button>
    </Drawer>
  );
};

export default LoginComponent;
