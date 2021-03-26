import Head from 'next/head'

import Header from '../common/header/Header';
import TopBar from '../common/topBar/TopBar';
import Navbar from '../common/navBar/NavBar'

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Navbar />
      {/* <h1>Hello</h1> */}
    </div>
  )
}

export default Home