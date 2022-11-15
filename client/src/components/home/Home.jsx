import React from 'react'
import BackLog from '../backlog/BackLog'
import InProgress from '../Inprogress/InProgress';
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <BackLog />
        <InProgress />

    </div>
  )
}

export default Home