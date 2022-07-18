import { Progress, Row, Tag, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { ThemeColor } from "../../store/reducers/theme.reducer";
import colors from "../../utils/colors";

export type rating = 1 | 2 | 3 | 4 | 5;

export interface SkillComponentProps {
  rating: rating;
  skill: string;
}

const SkillComponent = (props: SkillComponentProps) => {
  const { rating, skill } = props;
  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );

  return (
    <Row align="middle">
      <Progress
        trailColor={colors[color][7]}
        strokeColor={colors[color][5]}
        style={{ color: colors[color][3] }}
        percent={rating * 20}
        steps={5}
        format={(percent) => (
          <Row style={{ color: colors[color][3] }}>{`${
            (percent ?? 0) / 20
          }/5`}</Row>
        )}
      />
      <Row style={{ margin: "0px 10px" }}>{skill}</Row>
    </Row>
  );
};

export default SkillComponent;
