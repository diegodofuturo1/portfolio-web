import Link from "next/link";
import { Col, Row } from "antd";
import colors from "../../utils/colors";
import { Dispatcher } from "../../store/dispathers";
import { MenuType } from "../../store/reducers/menu.reducer";
import { useDispatch, useSelector } from "react-redux";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { ThemeColor } from "../../store/reducers/theme.reducer";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  menu: CSSProperties = {
    cursor: "pointer",
    minWidth: "120px",
    color: colors.white,
  };

  menuitem: CSSProperties = {
    ...this.menu,
    backgroundColor: colors[this.color][9],
    border: `1px solid ${colors[this.color][9]}`,
  };

  menuitemHover: CSSProperties = {
    ...this.menu,
    backgroundColor: colors[this.color][8],
    border: `1px solid ${colors[this.color][7]}`,
  };

  menuitemSelected: CSSProperties = {
    ...this.menu,
    backgroundColor: colors[this.color][9],
    borderTop: `1px solid ${colors[this.color][9]}`,
    borderLeft: `1px solid ${colors[this.color][9]}`,
    borderRight: `1px solid ${colors[this.color][9]}`,
    borderBottom: `5px solid ${colors[this.color][5]}`,
  };

  menuitemSelectedHover: CSSProperties = {
    ...this.menu,
    backgroundColor: colors[this.color][8],
    borderTop: `1px solid ${colors[this.color][7]}`,
    borderLeft: `1px solid ${colors[this.color][7]}`,
    borderRight: `1px solid ${colors[this.color][7]}`,
    borderBottom: `5px solid ${colors[this.color][5]}`,
  };

  span: CSSProperties = { margin: "10px 3px" };
}

interface MenuItemComponentProps {
  id: MenuType;
  text: string;
  icon: ReactNode;
}

const MenuItemComponent = (props: MenuItemComponentProps) => {
  const { id, text, icon } = props;
  const dispatcher = new Dispatcher(useDispatch());

  const {
    menu: { hover, selected },
    theme: { color },
  } = useSelector((state: any) => state);

  const [style, setStyle] = useState(new Style(color));
  const [css, setCss] = useState(style.menuitem);
  const sethover = (newMenuHover: MenuType) => {
    dispatcher.menu.hoverChange(newMenuHover);
  };

  const setSelected = (newMenuSelected: MenuType) => {
    dispatcher.menu.selectedChange(newMenuSelected);
  };

  useEffect(() => {
    const _selected = localStorage.getItem("selected") as MenuType;
    if (!selected && _selected) dispatcher.menu.selectedChange(_selected);
  }, [selected]);

  useEffect(() => {
    let css: CSSProperties = style.menuitem;

    if (selected == id && hover == id) css = style.menuitemSelectedHover;
    else if (selected == id) css = style.menuitemSelected;
    else if (hover == id) css = style.menuitemHover;

    setCss(css);
  }, [hover, selected, style]);

  useEffect(() => setStyle(new Style(color)), [color]);

  return (
    <Col
      key={id}
      style={css}
      onMouseEnter={() => sethover(id)}
      onMouseLeave={() => sethover("")}
      onClick={() => setSelected(id)}
    >
      <Link href={`/portfolio/${id}`}>
        <Row align="middle" justify="center">
          <span style={style.span}>{icon}</span>
          <span style={style.span}>{text}</span>
        </Row>
      </Link>
    </Col>
  );
};

export default MenuItemComponent;
