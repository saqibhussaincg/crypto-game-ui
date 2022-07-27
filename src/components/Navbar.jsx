import React, { useState } from 'react'
import StyledComponent  from 'styled-components'
import logo from '../assets/logo.png'
import flag from '../assets/flag.png'

import {FiLock} from 'react-icons/fi'
import {BsToggleOn, BsToggleOff} from 'react-icons/bs'


const Navbar = () => {

    const [navState, setNavState] = useState(false);

  return (
    <Nav>
        <div className='brand'>
            <img src={logo} alt='brand logo' />
        </div>
        <div className='toggle'>
            {
                navState ? <BsToggleOn onClick={() => setNavState(false)} />
                :
                <BsToggleOff onClick={() => setNavState(true)} />
            }
        </div>
    </Nav>
  )
}

export default Navbar;

const Nav = StyledComponent.nav``;