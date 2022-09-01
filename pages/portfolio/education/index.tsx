import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { NextPage } from 'next';
import { CSSProperties, useEffect, useState } from 'react';
import colors from 'utils/colors';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { useSelector, useDispatch } from 'react-redux';
import EducationComponent, { EducationComponentProps } from 'components/portfolio/education-display';
import If from 'components/utils/If';
import Foreach from 'components/utils/Foreach';
import { ApplicationState } from 'store/reducers';
import service from 'service';
import { Dispatcher } from 'store/dispathers';
class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  layout: CSSProperties = {
    height: '100%',
    padding: '20px',
    backgroundColor: colors[this.color][6],
  };
}

const EducationPage: NextPage = () => {
  const {
    theme: { color },
    portfolio: { id, educations },
  } = useSelector((state: ApplicationState) => state);

  const style = new Style(color);
  const dispatcher = new Dispatcher(useDispatch());

  useEffect(() => {
    const execute = async () => {
      if (id) {
        const _educations = await service.portfolio.getEducation(id);
        dispatcher.portfolio.saveEducation(_educations);
      }
    };

    if (!educations) execute();
  }, [id]);

  return (
    <Layout style={style.layout}>
      <If check={!!(educations && educations.length)}>
        <Foreach
          dataSource={educations ?? []}
          map={(education: EducationComponentProps, index: number) => <EducationComponent key={`education-component-${index}`} {...education} />}
        />
      </If>
    </Layout>
  );
};

export default EducationPage;
