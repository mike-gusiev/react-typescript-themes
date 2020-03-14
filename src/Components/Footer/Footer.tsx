import React from 'react'
import { FooterProps } from 'Interfaces/Interfaces'
import Button from 'Components/Botton/Botton'
import { FooterWrapper } from 'Components/Footer/Footer-styled'

const Footer: React.FC<FooterProps> = ({handleClick}) => <FooterWrapper><Button handleClick={handleClick}/></FooterWrapper>


export default Footer
