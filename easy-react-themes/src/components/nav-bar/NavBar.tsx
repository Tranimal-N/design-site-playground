import './nav-bar.css'
import { Link } from "react-router-dom"
import useLocalStorage from 'use-local-storage'

const NavBar = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }

    return (
        <div className="nav-theme" data-theme={theme}>
            <button onClick={switchTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} Theme
            </button>
            <ul className="nav-bar">
                <li>Home</li>                
                <Link to="/resources">
                    <li>Resources</li>
                </Link>
                <Link to ="/design-sprint">
                    <li>Design Sprint</li>
                </Link>
                <li>Blogs</li>
            </ul>
        </div>
    )
}

export default NavBar