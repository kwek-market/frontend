import Head from 'next/head'

import Header from '../common/header/Header';
import TopBar from '../common/topBar/TopBar';

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <h1>Hello</h1>
    </div>
  )
}

export default Home