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
    school: string
    classroom: string
}

const HeaderCardComponent = (props: HeaderCardComponentProps) => {
    const style = new Style
    const { src, school, classroom } = props
    return <Row align='middle'>
        <Image style={style.image} src={src} />
        <Col>
            <Row style={style.headerRow}>
                {school}
            </Row >
            <Row style={style.headerRow}>
                {classroom}
            </Row>
        </Col>
    </Row>
}

export default HeaderCardComponent