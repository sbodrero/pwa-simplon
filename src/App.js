import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Auth from './components/Auth';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header />
      <Content style={{ paddingTop: '40px' }}>
        <Auth />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
