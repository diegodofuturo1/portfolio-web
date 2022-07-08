import { CSSProperties } from "react"
import colors from "../../utils/colors"
import SkillInfoComponent from "../skill-info"
import HeaderCardComponent from "../card-header"
import SkillComponent, { rating, SkillComponentProps } from "../skill"
import { Card, Col, Descriptions, Badge, Row } from "antd"

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

export interface ExperienceComponentProps {
    company: string
    role: string
    image: string
    duration: string
    from: string
    to: string
    details: string
    skills: { skill: string, rating: rating }[]
}

const style = new Style

const ExperienceComponent = (props: ExperienceComponentProps) => {
    const { company, role, image, duration, from, to, details, skills } = props

    return <Card
        style={style.card}
        headStyle={style.header}
        title={
            <HeaderCardComponent
                title={company}
                description={role}
                src={image}
            />
        }>
        <Row justify='start'>
            <Descriptions style={style.description} size="small">
            <Descriptions.Item 
                    style={style.descriptionItem}
                    labelStyle={style.descriptionLabel} 
                    label="Duração"
                >
                    <Row
                        style={style.descriptionContent}
                        >{duration}
                    </Row>
                </Descriptions.Item>

                <Descriptions.Item 
                    style={style.descriptionItem}
                    labelStyle={style.descriptionLabel} 
                    label="De"
                >
                    <Row
                        style={style.descriptionContent}
                        >{from}
                    </Row>
                </Descriptions.Item>

                <Descriptions.Item 
                    style={style.descriptionItem}
                    labelStyle={style.descriptionLabel} 
                    label="Até"
                >
                    <Row
                        style={style.descriptionContent}
                        >{to}
                    </Row>
                </Descriptions.Item>
            </Descriptions>

            <Descriptions style={style.description} size="small">
                <Descriptions.Item style={style.descriptionItem} labelStyle={style.descriptionLabel} label="Detalhes"><Row style={style.descriptionContent}>{details}</Row></Descriptions.Item>
            </Descriptions>

            <Badge.Ribbon text={<SkillInfoComponent />}>
            <Descriptions style={style.description} size="small">
                
                    <Descriptions.Item 
                        style={style.descriptionItem}
                        labelStyle={style.descriptionLabel}
                        label="Habilidades Desenvolvidas"
                        >
                        <Col style={style.descriptionContent}>
                        {skills.map((skill: SkillComponentProps, index: number) => <SkillComponent key={`skill-component-${index}`} {...skill} />)}
                        </Col>
                    </Descriptions.Item>
                
            </Descriptions></Badge.Ribbon>
        </Row>
    </Card>
}

export default ExperienceComponent