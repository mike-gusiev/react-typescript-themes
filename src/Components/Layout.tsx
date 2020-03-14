import * as React from 'react'
import Theme from 'Theme/ThemeProvider'
import Header from 'Components/Header/Header'
import SidebarTop from 'Components/Sidebar/SidebarTop'
import SidebarBottom from 'Components/Sidebar/SidebarBottom'
import Container from 'Components/Container/Container'
import ThemeList from 'Components/ThemeList/ThemeList'
import Footer from 'Components/Footer/Footer'
import { Wrapper, GlobalStyle } from 'Components/Layout-styled'
import { lightTheme } from 'Theme/LightTheme'
import { nightTheme } from 'Theme/NightTheme'

const Layout = () => {

  const [theme, setTheme] = React.useState(lightTheme)
  const themeAll = [lightTheme, nightTheme];
  
  const handleClick = () => {
    let count = Math.floor(Math.random() * themeAll.length)
    setTheme(themeAll[count])
  }


  return (
    <Theme themeMode={theme}>
      <Wrapper>
          <GlobalStyle />
          <Header />
          <SidebarTop/>
          <SidebarBottom/>
          <Container/>
          <ThemeList/>
          <Footer handleClick={handleClick} />
      </Wrapper>
    </Theme>
  )
}

export default Layout
