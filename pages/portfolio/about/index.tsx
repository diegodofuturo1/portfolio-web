import 'antd/dist/antd.css';
import { Image, Layout, Row } from "antd";
import { NextPage } from "next";
import { CSSProperties } from 'react';
import colors from "../../../utils/colors";
import about from "../../../utils/texts/about";
import CommentComponent from '../../../components/comment';

class Style {
    layout: CSSProperties = {
        height: '100%',
        padding: '20px 0px',
        backgroundColor: colors.gray[6],
    }

    comment: CSSProperties = {
        width: '60%',
        margin: '20px auto',
        backgroundColor: colors.gray[8],
        padding: '10px',
        borderRadius: '10px',
        color: colors.gray[2],
        border: `1px solid ${colors.gray[7]}`
    }

    textcolor: CSSProperties = {
        color: colors.gray[4],
        fontSize: '1.2EM'
    }

    image: CSSProperties = {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        border: '1px solid black'
    }

    name: CSSProperties = {
        color: colors.white,
        fontSize: '2EM'
    }
}

const style = new Style

const AboutPage: NextPage = () => {
    return <Layout style={style.layout}>
        <Row justify='center'>
            <Image style={style.image} alt="diego-heleno.png" src="https://diegoheleno.s3.us-east-2.amazonaws.com/public/diego-heleno.jpg"  />  
        </Row>
        <Row style={style.name} justify='center'>Diego Heleno da Silva</Row>
        <CommentComponent comments={about} ></CommentComponent>
    </Layout>
}

export default AboutPage