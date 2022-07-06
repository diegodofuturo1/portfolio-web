import 'antd/dist/antd.css';
import { Layout } from "antd";
import { NextPage } from "next";
import { CSSProperties } from 'react';
import colors from "../../../utils/colors";
import about from "../../../utils/texts/about";
import CommentComponent from '../../../components/comment';
import ExperienceComponent from '../../../components/experience-display';

class Style {
    layout: CSSProperties = {
        height: '100%',
        padding: '20px',
        backgroundColor: colors.gray[6],
    }

    comment: CSSProperties = {
        width: '60%',
        margin: '20px auto',
        backgroundColor: colors.gray[7],
        padding: '10px',
        borderRadius: '10px',
        color: colors.gray[2],
        border: `1px solid ${colors.gray[5]}`
    }

    textcolor: CSSProperties = {
        color: colors.gray[4],
        fontSize: '1.2EM'
    }
}

const style = new Style

const ExperiencePage: NextPage = () => {
    return <Layout style={style.layout}>
        {/* <ExperienceComponent image='https://mechomotive.com/wp-content/uploads/2021/06/wipro.jpg' /> */}
        Experienbce
    </Layout>
}

export default ExperiencePage