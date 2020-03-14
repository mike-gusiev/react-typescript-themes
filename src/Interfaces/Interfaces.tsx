export interface FooterProps { handleClick: () => void }

export interface ButtonPors { handleClick: () => void }

export interface ThemeProps {
  color: {
    header: string,
    leftTop: string,
    leftBottom: string,
    center: string,
    right: string,
    bottom: string,
    button: string
  },
  backgroundColor: {
    header: string,
    leftTop: string,
    leftBottom: string,
    center: string,
    right: string,
    bottom: string,
    button: string
  }
}

export interface ThemeStyledProps {
  theme: {
    color: {
        header: string,
        leftTop: string,
        leftBottom: string,
        center: string,
        right: string,
        bottom: string,
        button: string
    },
    backgroundColor: {
        header: string,
        leftTop: string,
        leftBottom: string,
        center: string,
        right: string,
        bottom: string,
        button: string
    }
  }
}


export interface ThemeProviderProps {
  children: object,
  themeMode: object
}
