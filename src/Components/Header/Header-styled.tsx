// @ts-ignore
import styled from 'styled-components'
import { ThemeStyledProps } from 'Interfaces/Interfaces'

export const HeaderWrapper = styled.div`
    background: ${(props: ThemeStyledProps) => props.theme.backgroundColor.header};
    color: ${(props: ThemeStyledProps) => props.theme.color.header};
    grid-column-start: 1;
    grid-column-end: 4;
`
