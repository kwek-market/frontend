import Head from 'next/head'

import Header from '../common/header/Header';
import TopBar from '../common/topBar/TopBar';
import Navbar from '../common/navBar/NavBar';
import Footer from '../common/footer/Footer'

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Navbar />
      <Footer />
    </div>
  )
}

export default Home