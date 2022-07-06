import { CSSProperties } from "react"
import colors from "../../utils/colors"
import { Card, Descriptions, Row } from "antd"
import HeaderCardComponent from "../card-header"

class Style {
    layout: CSSProperties = {
        height: '100%',
        padding: '20px',
        backgroundColor: colors.gray[6],
    }

    card: CSSProperties = {
        margin: '0px 0px 20px 0px',
        color: colors.gray[2],
        backgroundColor: colors.gray[7],
        border: `1px solid ${colors.gray[8]}`
    }

    header: CSSProperties = {
        color: colors.gray[2],
        backgroundColor: colors.gray[8],
        border: `1px solid ${colors.gray[8]}`
    }

    description: CSSProperties = {
        color: colors.gray[5],
        padding: '0px',
    }

    descriptionContent: CSSProperties = {
        color: colors.gray[2],
        padding: '10px',
        margin: '0px',
        width: '100%',
        backgroundColor: colors.gray[6],
        marginBottom: '2px',
        marginLeft: '2px'
    }

    descriptionLabel: CSSProperties = {
        color: colors.gray[2],
        padding: '10px',
        backgroundColor: colors.gray[6],
        marginBottom: '2px',
        marginLeft: '2px',
    }

    descriptionItem: CSSProperties = {
        margin: '0px',
        padding: '0px',
    }
}

export interface EducationComponentProps {
    school: string
    classroom: string
    image: string
    nivel: string
    duration: string
    period: string
    details: string
}

const style = new Style

const EducationComponent = (props: EducationComponentProps) => {
    const { school, classroom, image, nivel, duration, period, details } = props
    return <Card
        style={style.card}
        headStyle={style.header}
        title={
            <HeaderCardComponent
                school={school}
                classroom={classroom}
                src={image}
            />
        }>
        <Row justify='start'>
            <Descriptions style={style.description} size="small">
                <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Nível"><Row style={style.descriptionContent}>{nivel}</Row></Descriptions.Item>
                <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Duração"><Row style={style.descriptionContent}>{duration}</Row></Descriptions.Item>
                <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Período"><Row style={style.descriptionContent}>{period}</Row></Descriptions.Item>
            </Descriptions>
            <Descriptions style={style.description} size="small">
                <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Detalhes"><Row style={style.descriptionContent}>{details}</Row></Descriptions.Item>
            </Descriptions>
        </Row>
    </Card>
}

export default EducationComponent