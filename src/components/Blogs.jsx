import React from 'react'
import styled from 'styled-components'

import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'

const Blogs = () => {

  const images = [blog1, blog2, blog3];
  
  return (
    <Section id='blogs'>
    <div className='title'>
      <h2>News & Feeds</h2>
      <h5>Where you can earn Crypto</h5>
    </div>

    <div className='blogs'>
    {
      images.map((img, index) => {
        return(
          <div className='blog' key={index}>
          <img src={img} alt='Blog Image' />
          <div className='data'>
            <h6>2022</h6>
            <h4>Rightmove Now Offering Click to Purchase Option</h4>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
          </div>
          </div>
        )
      })
    }
    </div>
    </Section>
  )
}

export default Blogs

const Section = styled.section`
  margin: 4rem 10rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2rem;

  .title{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .blogs{
    display: flex;
    gap: 5rem;

    .blog{
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: rgba(0,0,0,0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover{
        border-color: var(--primary-color);
      }
      img{
        width: 99%;
      }
      .data{
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p{
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
`