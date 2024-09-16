import { useContext } from 'react'
import ThemeContext from './theme-context'

const useThemeConfig = () => {
    return useContext(ThemeContext)
}

export default useThemeConfig