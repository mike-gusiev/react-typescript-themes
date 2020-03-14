// @ts-ignore
import styled from 'styled-components'
import { ThemeStyledProps } from 'Interfaces/Interfaces'

export const ThemeListWrapper = styled.div`
    background-color:${(props: ThemeStyledProps) => props.theme.backgroundColor.right};
    color: ${(props: ThemeStyledProps) => props.theme.color.right};
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 4;
    @media (max-width: 500px) {
        grid-row-start: 4;
        grid-column-start: 1;
    }
`
