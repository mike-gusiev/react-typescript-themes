// @ts-ignore
import styled from 'styled-components'
import { ThemeStyledProps } from 'Interfaces/Interfaces'

export const SidebarBottomWrapper = styled.div`
    background-color: ${(props: ThemeStyledProps) => props.theme.backgroundColor.leftBottom};
    color: ${(props: ThemeStyledProps) => props.theme.color.leftBottom};
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    @media (max-width: 500px) {
        grid-row-start: 3;
        grid-column-start: 2;
        grid-column-end: 3;
    }
`
