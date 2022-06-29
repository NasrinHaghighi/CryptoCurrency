import React from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {Chart as ChartJS} from 'chart.js/auto'
const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
    //to get price and timestamp from coinhistory//

    const coinPrice = [];
    const coinTimestamp = [];

    for(let i=0 ; i<coinHistory?.data?.history.length ;i++){
        coinPrice.push(coinHistory?.data?.history[i].price)
    }
    for(let i=0 ; i<coinHistory?.data?.history.length ;i++){
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

   // console.log(coinPrice)
    console.log(coinTimestamp)
   const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        
        backgroundColor: '#0088bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
    <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
        <Line options={options} data={data} />
      </Row>

    </>
  )
}

export default LineChart