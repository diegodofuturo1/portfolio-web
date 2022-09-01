import colors from 'utils/colors';
import { CSSProperties, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { Card, Col, Descriptions, Badge, Row } from 'antd';
import SkillInfoComponent from 'components/portfolio/skill-info';
import HeaderCardComponent from 'components/portfolio/card-header';
import SkillComponent, { rating, SkillComponentProps } from 'components/portfolio/skill';
import If from 'components/utils/If';
import Foreach from 'components/utils/Foreach';
import service from 'service';
import { Dispatcher } from 'store/dispathers';
import { SkillDto } from 'dtos/portfolio';

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  layout: CSSProperties = {
    height: '100%',
    padding: '20px',
    backgroundColor: colors[this.color][6],
  };

  card: CSSProperties = {
    margin: '0px 0px 20px 0px',
    color: colors[this.color][2],
    backgroundColor: colors[this.color][7],
    border: `1px solid ${colors[this.color][8]}`,
    borderLeft: `10px solid ${colors[this.color][5]}`,
  };

  header: CSSProperties = {
    color: colors[this.color][2],
    backgroundColor: colors[this.color][8],
    border: `1px solid ${colors[this.color][8]}`,
  };

  description: CSSProperties = {
    color: colors[this.color][5],
    padding: '0px',
  };

  descriptionContent: CSSProperties = {
    color: colors[this.color][2],
    padding: '10px',
    margin: '0px',
    width: '100%',
    backgroundColor: colors[this.color][6],
    marginBottom: '2px',
    marginLeft: '2px',
  };

  descriptionLabel: CSSProperties = {
    color: colors[this.color][2],
    padding: '10px',
    backgroundColor: colors[this.color][6],
    marginBottom: '2px',
    marginLeft: '2px',
  };

  descriptionItem: CSSProperties = {
    margin: '0px',
    padding: '0px',
  };
}

export interface ExperienceComponentProps {
  id: string;
  company: string;
  role: string;
  image: string;
  duration: string;
  from: string;
  to: string;
  details: string;
  skills: { skill: string; rating: rating }[];
}

const ExperienceComponent = (props: ExperienceComponentProps) => {
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);
  const style = new Style(color);
  const { id, company, role, image, duration, from, to, details } = props;
  const [skills, setSkills] = useState<SkillDto[]>([]);

  useEffect(() => {
    if (!skills.length) {
      const execute = async () => {
        const _skills = await service.portfolio.getSkill(id);
        setSkills(() => _skills);
      };
      if (id) execute();
    }
  }, [id]);

  return (
    <Card style={style.card} headStyle={style.header} title={<HeaderCardComponent title={company} description={role} src={image} />}>
      <Row justify="start">
        <Descriptions style={style.description} size="small">
          <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Duração">
            <Row style={style.descriptionContent}>{duration}</Row>
          </Descriptions.Item>

          <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="De">
            <Row style={style.descriptionContent}>{from}</Row>
          </Descriptions.Item>

          <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Até">
            <Row style={style.descriptionContent}>{to}</Row>
          </Descriptions.Item>
        </Descriptions>

        <Descriptions style={style.description} size="small">
          <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Detalhes">
            <Row style={style.descriptionContent}>{details}</Row>
          </Descriptions.Item>
        </Descriptions>

        <Badge.Ribbon text={<SkillInfoComponent />} color={colors[color][5]} style={{ cursor: `pointer` }}>
          <Descriptions style={style.description} size="small">
            <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Habilidades">
              <Col style={style.descriptionContent}>
                <If check={!!(skills && skills.length)}>
                  <Foreach
                    dataSource={skills}
                    map={(skill: SkillComponentProps, index: number) => <SkillComponent key={`skill-component-${index}`} {...skill} />}
                  />
                </If>
              </Col>
            </Descriptions.Item>
          </Descriptions>
        </Badge.Ribbon>
      </Row>
    </Card>
  );
};

export default ExperienceComponent;
