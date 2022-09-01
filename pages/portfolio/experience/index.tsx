import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { NextPage } from 'next';
import { CSSProperties, useEffect } from 'react';
import colors from 'utils/colors';
import ExperienceComponent, { ExperienceComponentProps } from 'components/portfolio/experience-display';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { useSelector, useDispatch } from 'react-redux';
import If from 'components/utils/If';
import Foreach from 'components/utils/Foreach';
import { ApplicationState } from 'store/reducers';
import { Dispatcher } from 'store/dispathers';
import service from 'service';

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  layout: CSSProperties = {
    height: '100%',
    padding: '20px',
    backgroundColor: colors[this.color][6],
  };

  comment: CSSProperties = {
    width: '60%',
    margin: '20px auto',
    backgroundColor: colors[this.color][7],
    padding: '10px',
    borderRadius: '10px',
    color: colors[this.color][2],
    border: `1px solid ${colors[this.color][5]}`,
  };

  textcolor: CSSProperties = {
    color: colors[this.color][4],
    fontSize: '1.2EM',
  };
}

const ExperiencePage: NextPage = () => {
  const {
    theme: { color },
    portfolio: { id, experiences },
  } = useSelector((state: ApplicationState) => state);
  const style = new Style(color);
  const dispatcher = new Dispatcher(useDispatch());

  useEffect(() => {
    const execute = async () => {
      if (id) {
        const _experience = await service.portfolio.getExperience(id);
        dispatcher.portfolio.saveExperience(_experience);
      }
    };

    if (!experiences) execute();
  }, [id]);

  return (
    <Layout style={style.layout}>
      <If check={!!(experiences && experiences.length)}>
        <Foreach
          dataSource={experiences ?? []}
          map={(experience: ExperienceComponentProps, index: number) => <ExperienceComponent key={`experience-component-${index}`} {...experience} />}
        />
      </If>
    </Layout>
  );
};

export default ExperiencePage;
