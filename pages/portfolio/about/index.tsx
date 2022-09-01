import 'antd/dist/antd.css';
import { Image, Layout, Row } from 'antd';
import { NextPage } from 'next';
import { CSSProperties, useEffect } from 'react';
import colors from 'utils/colors';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { useDispatch, useSelector } from 'react-redux';
import AboutComponent from 'components/portfolio/comment';
import If from 'components/utils/If';
import { ApplicationState } from 'store/reducers';
import service from 'service';
import { Dispatcher } from 'store/dispathers';

const AboutPage: NextPage = () => {
  const {
    theme: { color },
    portfolio: { id, abouts },
  } = useSelector((state: ApplicationState) => state);
  const style = new Style(color);
  const dispatcher = new Dispatcher(useDispatch());

  useEffect(() => {
    const execute = async () => {
      if (id) {
        const _abouts = await service.portfolio.getAbouts(id);
        dispatcher.portfolio.saveAbout(_abouts);
      }
    };

    if (!abouts) execute();
  }, [id]);

  console.log(abouts);

  return (
    <Layout style={style.layout}>
      <If check={!!(abouts && abouts.length)}>
        <Row justify="center">
          <Image style={style.image} alt="diego-heleno.png" src="https://diegoheleno.s3.us-east-2.amazonaws.com/public/diego-heleno.jpg" />
        </Row>
        <Row style={style.name} justify="center">
          Diego Heleno da Silva
        </Row>
        <AboutComponent abouts={abouts ?? []}></AboutComponent>
      </If>
    </Layout>
  );
};

export default AboutPage;

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  layout: CSSProperties = {
    height: '100%',
    padding: '20px 0px',
    backgroundColor: colors[this.color][6],
  };

  comment: CSSProperties = {
    width: '60%',
    margin: '20px auto',
    backgroundColor: colors[this.color][8],
    padding: '10px',
    borderRadius: '10px',
    color: colors[this.color][2],
    border: `1px solid ${colors[this.color][7]}`,
  };

  textcolor: CSSProperties = {
    color: colors[this.color][4],
    fontSize: '1.2EM',
  };

  image: CSSProperties = {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    border: '1px solid black',
  };

  name: CSSProperties = {
    color: colors.white,
    fontSize: '2EM',
  };
}
