import './nav-bar.css'
import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = () => {

    const [theme, setTheme] = useState('light')

    const switchToDark = () => {
        setTheme('dark');
    }

    const switchToLight = () => {
        setTheme('light');
    }

    return (
        <div className="nav-theme" data-theme={theme}>

            <ul className="nav-bar">
                <Link to="/" onClick={switchToLight}>
                    <li>Home</li>                
                </Link>
                <Link to="/resources" onClick={switchToLight}>
                    <li>Resources</li>
                </Link>
                <Link to ="/design-sprint" onClick={switchToDark}>
                    <li>Design Sprint</li>
                </Link>
                <li>Blogs</li>
            </ul>

        </div>
    )
}

export default NavBar