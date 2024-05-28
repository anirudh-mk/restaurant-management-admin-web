import React from 'react'
import style from '../styles/loginScreen.module.css'

import { Link, useNavigate } from 'react-router-dom'


function LoginScreen() {
    navigation = useNavigate()
    return (
        <div className={style.body}>
            <div className={style.container}>
                <form action="">
                    <p>Username</p>
                    <input type="text" />
                    <p>password</p>
                    <input type="text" />
                    <button type="submit" onClick={() => navigation('/layout/dashboard')}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen