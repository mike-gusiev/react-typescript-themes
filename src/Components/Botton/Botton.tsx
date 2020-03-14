import React from 'react'
import { ButtonPors } from 'Interfaces/Interfaces'
import { ButtonWrapper } from 'Components/Botton/Botton-styled'

const Button: React.FC<ButtonPors> = ({handleClick}) => <ButtonWrapper onClick={handleClick}>Click me!</ButtonWrapper>

export default Button