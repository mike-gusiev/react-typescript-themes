// @ts-ignore
import styled from 'styled-components'
import { ThemeStyledProps } from 'Interfaces/Interfaces'

export const ButtonWrapper = styled.button`
    position: relative;
    width: 10%;
    left: 50%;
    top: 40%;
    transform: translate(-50%, 0);
    border: none;
    background-color: ${(props: ThemeStyledProps) => props.theme.backgroundColor.button};
    color: ${(props: ThemeStyledProps) => props.theme.color.button};
    color: black;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
    outline: 0;
`
