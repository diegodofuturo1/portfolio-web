import { CSSProperties } from "react"
import { Col, Row, Image } from "antd"

class Style {
    image: CSSProperties = {
        width: '100px'
    }

    headerRow: CSSProperties = {
        marginLeft: '20px'
    }
}

interface HeaderCardComponentProps {
    src: string
    title: string
    description: string
}

const HeaderCardComponent = (props: HeaderCardComponentProps) => {
    const style = new Style
    const { src, title, description } = props
    return <Row align='middle'>
        <Image style={style.image} src={src} alt="logo.png" />
        <Col>
            <Row style={style.headerRow}>
                {title}
            </Row >
            <Row style={style.headerRow}>
                {description}
            </Row>
        </Col>
    </Row>
}

export default HeaderCardComponent