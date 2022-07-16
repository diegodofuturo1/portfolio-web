import "antd/dist/antd.css";
import { Layout } from "antd";
import { NextPage } from "next";
import { CSSProperties } from "react";
import colors from "../../../utils/colors";
import experiences from "../../../utils/texts/experience";
import ExperienceComponent, {
  ExperienceComponentProps,
} from "../../../components/experience-display";
import { ThemeColor } from "../../../store/reducers/theme";
import { useSelector } from "react-redux";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "100%",
    padding: "20px",
    backgroundColor: colors[this.color][6],
  };

  comment: CSSProperties = {
    width: "60%",
    margin: "20px auto",
    backgroundColor: colors[this.color][7],
    padding: "10px",
    borderRadius: "10px",
    color: colors[this.color][2],
    border: `1px solid ${colors[this.color][5]}`,
  };

  textcolor: CSSProperties = {
    color: colors[this.color][4],
    fontSize: "1.2EM",
  };
}

const ExperiencePage: NextPage = () => {
  const { color } = useSelector((state: any) => state.theme);
  const style = new Style(color);

  return (
    <Layout style={style.layout}>
      {experiences.map(
        (experience: ExperienceComponentProps, index: number) => (
          <ExperienceComponent
            key={`experience-component-${index}`}
            {...experience}
          />
        )
      )}
    </Layout>
  );
};

export default ExperiencePage;
