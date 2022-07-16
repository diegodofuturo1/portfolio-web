import "antd/dist/antd.css";
import { NextPage } from "next";
import Router from "next/router";
import Meta from "antd/lib/card/Meta";
import { useSelector } from "react-redux";
import colors from "../../../utils/colors";
import { Layout, Card, Col, Row, Badge } from "antd";
import { ThemeColor } from "../../../store/reducers/theme";
import { CSSProperties, useEffect, useState } from "react";
import ProjectItemComponent from "../../../components/project-item";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "100%",
    padding: "20px",
    backgroundColor: colors[this.color][6],
  };
}

const ExperiencePage: NextPage = () => {
  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );

  const style = new Style(color);

  return (
    <Layout style={style.layout}>
      <Row>
        <ProjectItemComponent
          route="projects/change-theme"
          title="Change Theme"
          discription="Altere o padrão de cores do site!"
          badge="Novo"
        />
        <ProjectItemComponent
          route=""
          title="SignIn/SignOut"
          discription="Autenticação de usuários do site!"
          badge="Em breve"
        />
        <ProjectItemComponent
          route=""
          title="API"
          discription="Conectar site com uma api e banco de dados"
          badge="Em breve"
        />
      </Row>
    </Layout>
  );
};

export default ExperiencePage;
