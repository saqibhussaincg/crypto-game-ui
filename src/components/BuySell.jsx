import React from 'react'
import styled from 'styled-components';

import BuySell1 from '../assets/buy-sell-1.png';
import BuySell2 from '../assets/buy-sell-2.png';
import BuySell3 from '../assets/buy-sell-3.png';

const BuySell = () => {
  return (
    <Section>
      <div className='row'>
        <div className='col' id='buySell1'>
            <img src={BuySell1} alt='buy sell' />
          <div className='text'>
            <h2>
              Buy and Sell Virtual <span>Lands</span> and <span>Properties</span>
            </h2>
          </div>
        </div>
        <div className='col' id='buySell2'>
          <div className='text'>
            <h2>
              Buy and Sell Virtual <span>Lands</span> and <span>Properties</span>
            </h2>
          </div>
            <img src={BuySell2} alt='buy sell' />
        </div>
        <div className='col' id='buySell3'>
            <img src={BuySell3} alt='buy sell' />
          <div className='text'>
            <h2>
              Buy and Sell Virtual <span>Lands</span> and <span>Properties</span>
            </h2>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default BuySell

const Section = styled.section`
  margin: 6rem 10rem;
  .row{
    display: flex;
    gap: 8rem;
    flex-direction: column;
    
    .col{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      img{
        height: 60vh;
      }

      h2{
        font-size: 3rem;
        span{
          color: var(--primary-color)
        }
      }
    }
  }
`