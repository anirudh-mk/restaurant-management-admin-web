import React, { useState } from 'react';
import style from '../styles/loginScreen.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginScreen() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();

        axios.post('http://127.0.0.1:8000/api/v1/restaurant/login/', {
            email: username,
            password: password
        })
            .then(function (response) {
                // Assuming response status 200 indicates success
                if (response.status === 200) {
                    setError(false);
                    navigate('/layout/foods');
                } else {
                    setError(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                setError(true);
            });
    }

    return (
        <div className={style.body}>
            <div className={style.container}>
                <form onSubmit={handleLogin}>
                    <p>Username</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className='error'>Invalid username or password</p>}
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;
