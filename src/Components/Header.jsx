import React, { useEffect, useState } from 'react'
import '../Style/Components/Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useSelector } from 'react-redux'
import { selectProfile } from '../utils/selectors'

const Header = () => {
    const [logged, setLogged] = useState(null)
    const login = useSelector(selectProfile)

    function signOut() {
        localStorage.clear()
        window.location.replace('./sign_in')
    }
    useEffect(() => {
        if (login.data) {
            setLogged(login.data.body.firstName)
        }
    }, [login.data])

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={'/'}>
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {logged ? (
                <div>
                    <Link className="main-nav-item" to={'/dashboard'}>
                        <FontAwesomeIcon icon={solid('user-circle')} />
                        {logged}
                    </Link>
                    <a className="main-nav-item" onClick={signOut} href="./">
                        <FontAwesomeIcon icon={solid('sign-out')} />
                        Sign Out
                    </a>
                </div>
            ) : (
                <div>
                    <Link className="main-nav-item" to={'/Sign_in'}>
                        <FontAwesomeIcon icon={solid('user-circle')} />
                        Sign In
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Header
