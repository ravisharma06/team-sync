import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../state/themeSlice'

const useTheme = () => {
    const mode = useSelector((store) => store.theme.mode)
    const dispatch = useDispatch()

    const changeTheme = () => {
        dispatch(toggleTheme())
    }

    return { mode, changeTheme }
}

export default useTheme
