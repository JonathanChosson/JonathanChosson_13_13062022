import React, { useEffect, useState } from 'react'
import '../Style/Components/SignInForm.css'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectLogin } from '../utils/selectors'
import { axiosLogin, loginStorage } from '../features/login'
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {
    const [logged, setLogged] = useState(false)
    const store = useStore()
    const dispatch = useDispatch()
    const login = useSelector(selectLogin)
    const navigate = useNavigate()

    useEffect(() => {
        function dashboard() {
            navigate('/dashboard')
        }
        if (login.status === 'resolved') {
            setLogged(true)
            dashboard()
        } else if (localStorage.getItem('JWT_Key')) {
            dispatch(loginStorage(JSON.parse(localStorage.getItem('JWT_Key'))))
            dashboard()
        }
    }, [dispatch, logged, login.status, navigate])

    const getLogin = (event) => {
        const email = document.getElementById('username').value
        const password = document.getElementById('password').value
        const remember = document.getElementById('remember-me').checked
        event.preventDefault()
        axiosLogin(
            store,
            {
                email: email,
                password: password,
            },
            remember
        )
    }

    return (
        <section className="sign-in-content">
            {!logged ? (
                <span>
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="email" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" onClick={getLogin}>
                            Sign In
                        </button>
                    </form>
                </span>
            ) : (
                ''
            )}
        </section>
    )
}

export default SignInForm
