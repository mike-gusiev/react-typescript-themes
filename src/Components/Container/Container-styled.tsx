// @ts-ignore
import styled from 'styled-components'
import { ThemeStyledProps } from 'Interfaces/Interfaces'

export const ContainerWrapper = styled.div`
    background-color: ${(props: ThemeStyledProps) => props.theme.backgroundColor.center};
    color: ${(props: ThemeStyledProps) => props.theme.color.center};
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 2;
    @media (max-width: 500px) {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;
    }
`
