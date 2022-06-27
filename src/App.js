
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Layout, Typography, Space } from 'antd';


import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className="App">
      
    <div className='navbar'> 
      <Navbar />
         </div>
    <div className='main'>
    <Layout>
       <div className='routes'>
       <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
          <Route exact path="/exchanges" element={<Exchanges/>}/>
          <Route exact path="/cryptoDetails" element={<CryptoDetails/>}/>
          <Route exact path="/news" element={<News/>}/>
        </Routes>
   
       </div>
      </Layout>
    </div>
    <div className='footer'>
    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space style={{ display:'flex' }}>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
    </div>
    </div>
  );
}

export default App;
