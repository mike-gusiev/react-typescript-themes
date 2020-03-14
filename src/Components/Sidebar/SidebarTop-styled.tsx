// @ts-ignore
import styled from 'styled-components'
import { ThemeStyledProps } from 'Interfaces/Interfaces'

export const SidebarTopWrapper = styled.div`
    background-color: ${(props: ThemeStyledProps) => props.theme.backgroundColor.leftTop};
    color: ${(props: ThemeStyledProps) => props.theme.color.leftTop};
    grid-column-start: 1;
    grid-column-end: 2;
    @media (max-width: 500px) {
        grid-row-start: 3;
        grid-column-start: 1;
        grid-column-end: 2;
    }
`
