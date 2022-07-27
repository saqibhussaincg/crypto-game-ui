import React from 'react'
import background from '../assets/background.png'
import image from '../assets/home.png'
import {RiGroupLine} from 'react-icons/ri'
import styled from 'styled-components'
import Button from './Button'

const Home = () => {
  return (
    <Section id="home">
    <div className='text'>
      <h1>
        <span className='highlight'>Earthium</span> is a real-time strategic game
      </h1>
      <p>
        Where you earn money, <span className='highlight'>Crypto</span> and
        <span className='highlight'>NFT's</span> by trading land, finding treasures and building businessess. Welcome!
      </p>
      <Button
       text="Join our Discord"
       icon={<RiGroupLine/>}
      />
    </div>

    <div className='image'>
      <img src={image} alt='Home Image' />
    </div>
    </Section>
  )
}

export default Home

const Section = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  ${'' /* grid-template-columns: 1fr 1fr; */}
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;

  .image{
    img{
      width: 80%;
    }
  }
`