import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { NextPage } from "next";
import { CSSProperties } from 'react';
import colors from "../../../utils/colors";
import educations from '../../../utils/texts/education'
import EducationComponent, { EducationComponentProps } from '../../../components/education-display';
class Style {
    layout: CSSProperties = {
        height: '100%',
        padding: '20px',
        backgroundColor: colors.gray[6],
    }
}

const style = new Style

const EducationPage: NextPage = () => {

    return <Layout style={style.layout}>
       {educations.map((education: EducationComponentProps, index: number) => <EducationComponent key={`education-component-${index}`} {...education} />)} 
    </Layout>
}

export default EducationPage