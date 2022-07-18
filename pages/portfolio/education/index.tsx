import "antd/dist/antd.css";
import { Layout } from "antd";
import { NextPage } from "next";
import { CSSProperties } from "react";
import colors from "../../../utils/colors";
import educations from "../../../utils/texts/education";
import EducationComponent, {
  EducationComponentProps,
} from "../../../components/education-display";
import { ThemeColor } from "../../../store/reducers/theme.reducer";
import { useSelector } from "react-redux";
class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "100%",
    padding: "20px",
    backgroundColor: colors[this.color][6],
  };
}

const EducationPage: NextPage = () => {
  const { color } = useSelector((state: any) => state.theme);

  const style = new Style(color);

  return (
    <Layout style={style.layout}>
      {educations.map((education: EducationComponentProps, index: number) => (
        <EducationComponent
          key={`education-component-${index}`}
          {...education}
        />
      ))}
    </Layout>
  );
};

export default EducationPage;
