import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import styled from 'styled-components';
 

const Button = (props) => {

  let {icon, text} = props; 
  if(icon === undefined) 
  icon = <BsArrowRightShort />

  return (
   <Btn>
    {icon}
    {text}
   </Btn>
  )
}

export default Button

const Btn = styled.button`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  cursor: pointer;

  svg{
    font-size: 1.1rem;
  }
`