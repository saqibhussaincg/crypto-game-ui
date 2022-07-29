import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.png'

const Footer = () => {

  const links = [
    {title: "Company", links: ["Home", "Map", "About", "News"]},

    {
      title: "Links",
      links: [
        "Brochure",
        "Company",
        "Terms & Condition",
        "Cookie Policy"
      ],
    },
    {
      title: "Contact",
      links: [
        "+123 465 789",
        "earthium@gmail.com",
        "Milyway Sector 75, Planet Earth"
      ]
    }


  ]
  return (
    <Foot>
    <div className='upper_footer'>
      <div className='brand'>
        <img src={logo} alt='brand logo' />
      </div>
    </div>

    <div className='lower_footer'>

    </div>

    </Foot>
  )
}

export default Footer

const Foot = styled.footer``