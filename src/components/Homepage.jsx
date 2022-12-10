import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
//import Cryptocurrencies from './Cryptocurrencies';
//import News from './News';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;


const Homepage = () => {
   const {data, isFetching} = useGetCryptosQuery();
    console.log(data);
    const globalStats = data?.data?.stats;
   if (isFetching) return 'Loading...';
    
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value="5" /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
      
        <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>

     
    
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
     

      </>
  );
};

export default Homepage;