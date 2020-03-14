// @ts-ignore
import styled from 'styled-components'
import { ThemeStyledProps } from 'Interfaces/Interfaces'

export const FooterWrapper = styled.div`
    background-color: ${(props: ThemeStyledProps) => props.theme.backgroundColor.bottom};
    color: ${(props: ThemeStyledProps) => props.theme.color.bottom};
    grid-row-start: 4;
    grid-column-start: 1;
    grid-column-end: 4;
    @media (max-width: 500px) {
        grid-row-start: 5;
    }
`
