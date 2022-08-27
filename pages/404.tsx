import type { NextPage } from 'next';
import 'antd/dist/antd.css';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Dispatcher } from 'store/dispathers';
import { useDispatch } from 'react-redux';
import If from 'components/utils/If';

const Home: NextPage = () => {
  const [redirect, setRedirect] = useState('');
  const dispatcher = new Dispatcher(useDispatch());

  useEffect(() => {
    if (redirect) {
      Router.push(redirect);
      dispatcher.menu.selectedChange(`about`);
    }
    setRedirect('');
  }, [redirect]);

  useEffect(() => setRedirect(`portfolio/about`), []);

  return <If />;
};

export default Home;
