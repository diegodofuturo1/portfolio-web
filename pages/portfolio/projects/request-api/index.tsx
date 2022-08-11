import "antd/dist/antd.css";
import { Layout } from "antd";
import { NextPage } from "next";
import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import colors from "../../../../utils/colors";
import { ThemeColor } from "../../../../store/reducers/theme.reducer";
import ProjectHeaderComponent from "../../../../components/project-header";
import RequestApiListComponent from "../../../../components/request-api/request-api-list";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "100%",
    padding: "20px",
    backgroundColor: colors[this.color][6],
  };
}

const RequestApiPage: NextPage = () => {
  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );
  const style = new Style(color);

  return (
    <Layout style={style.layout}>
      <ProjectHeaderComponent title="API's Disponíveis" />
      <RequestApiListComponent />
    </Layout>
  );
};

export default RequestApiPage;
