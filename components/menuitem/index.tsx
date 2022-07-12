import { Col, Menu } from "antd"
import Link from "next/link"
import colors from "../../utils/colors"
import { Dispatcher } from "../../store/dispathers"
import { MenuType } from "../../store/reducers/menu"
import { useDispatch, useSelector } from "react-redux"
import { CSSProperties, ReactNode, useEffect, useState } from "react"

class Style {
    menuitem: CSSProperties = {
        color: colors.white,
        backgroundColor: colors.gray[9],
        border: `1px solid ${colors.gray[9]}`,
    }

    menuitemHover: CSSProperties = {
        color: colors.white,
        backgroundColor: colors.gray[8],
        border: `1px solid ${colors.gray[7]}`,
    }

    menuitemSelected: CSSProperties = {
        color: colors.white,
        borderTop: `1px solid ${colors.gray[9]}`,
        borderLeft: `1px solid ${colors.gray[9]}`,
        borderRight: `1px solid ${colors.gray[9]}`,
        borderBottom: `5px solid ${colors.gray[7]}`,
    }

    menuitemSelectedHover: CSSProperties = {
        color: colors.white,
        backgroundColor: colors.gray[8],
        borderTop: `1px solid ${colors.gray[7]}`,
        borderLeft: `1px solid ${colors.gray[7]}`,
        borderRight: `1px solid ${colors.gray[7]}`,
        borderBottom: `5px solid ${colors.gray[7]}`,
    }
}

interface MenuItemComponentProps {
    id: MenuType,
    text: string,
    icon: ReactNode
}

const MenuItemComponent = (props: MenuItemComponentProps) => {
    const { id, text, icon } = props
    const style = new Style
    const dispatcher = new Dispatcher(useDispatch())

    const { hover, selected } = useSelector((state: any) => state.menu)
    const [css, setCss] = useState(style.menuitem)

    const sethover = (newMenuHover: MenuType) => {
        dispatcher.menu.hoverChange(newMenuHover)
    }

    const setSelected = (newMenuSelected: MenuType) => {
        dispatcher.menu.selectedChange(newMenuSelected)
    }

    useEffect(() => {
        const _selected = localStorage.getItem('selected') as MenuType
        if (!selected && _selected)
            dispatcher.menu.selectedChange(_selected)
    }, [selected])

    useEffect(() => {
        let css: CSSProperties = style.menuitem

        if (selected == id && hover == id)
            css = style.menuitemSelectedHover
        else if (selected == id)
            css = style.menuitemSelected
        else if (hover == id)
            css = style.menuitemHover

        setCss(css)
    }, [hover, selected])

    return <Menu.Item
        key={id}
        icon={icon}
        style={css}
        onMouseEnter={event => { event.domEvent.currentTarget.classList.remove('ant-menu-item-selected'); sethover(id) }}
        onMouseLeave={event => { event.domEvent.currentTarget.classList.remove('ant-menu-item-selected'); sethover('') }}
        onClick={event => { event.domEvent.currentTarget.classList.remove('ant-menu-item-selected'); setSelected(id) }}
    ><Link href={`/portifolio/${id}`}>{text}</Link>
    </Menu.Item>
}

export default MenuItemComponent