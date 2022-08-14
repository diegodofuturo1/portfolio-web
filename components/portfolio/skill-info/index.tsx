import { Row, Tag, Tooltip } from 'antd';
import colors from 'utils/colors';

import { InfoCircleOutlined } from '@ant-design/icons';

const SkillInfoComponent = () => (
  <Tooltip
    title={
      <>
        <Row>
          <Tag style={{ color: colors.gray[2], width: '100%' }} color={colors.green[5]}>
            5/5 - Dominado!
          </Tag>
        </Row>
        <Row>
          <Tag style={{ color: colors.gray[2], width: '100%' }} color={colors.lime[5]}>
            4/5 - Estou Confortável
          </Tag>
        </Row>
        <Row>
          <Tag style={{ color: colors.gray[2], width: '100%' }} color={colors.orange[5]}>
            3/5 - Usei bastante
          </Tag>
        </Row>
        <Row>
          <Tag style={{ color: colors.gray[2], width: '100%' }} color={colors.volcano[5]}>
            2/5 - Pouco Usado
          </Tag>
        </Row>
        <Row>
          <Tag style={{ color: colors.gray[2], width: '100%' }} color={colors.red[5]}>
            1/5 - Só ouço falar
          </Tag>
        </Row>
      </>
    }
  >
    <InfoCircleOutlined />
  </Tooltip>
);

export default SkillInfoComponent;
