import React from 'react';
import '../Root.css'

import HomeHeader from './HomeHeader'
import HomeSider from './HomeSider'
import HomeContent from './HomeContent'
import { Layout } from 'antd';


const Home = () => {
    return (
        <Layout id="indexLayout">
            <HomeSider />
            <Layout className="site-layout">
                <HomeHeader />
                
                <HomeContent />
            </Layout>
        </Layout>
    );
};

export default Home;