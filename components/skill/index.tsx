import { Progress, Row, Tag, Tooltip } from "antd"
import colors from "../../utils/colors"

export type rating = 1 | 2 | 3 | 4 | 5

export interface SkillComponentProps {
    rating: rating
    skill: string
}

const SkillComponent = (props: SkillComponentProps) => {
    const { rating, skill } = props

    return <Row align="middle">
        <Progress style={{ color: colors.white }} percent={rating * 20} steps={5} format={percent => <Row style={{ color: colors.white }} >{`${(percent ?? 0) / 20}/5`}</Row>} />
        <Row style={{ margin: '0px 10px' }}>
            {skill}
        </Row>
    </Row>
}

export default SkillComponent