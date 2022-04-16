import React from 'react'
import './home.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/banner';
import List from '../Lists/list';

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Banner/>
        <List/>
    </div>
  )
}

export default Home
