import React, { useState } from 'react';
import style from '../styles/loginScreen.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function LoginScreen() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        setLoading(true);

        axios.post('http://127.0.0.1:8000/api/v1/restaurant/login/', {
            email: username,
            password: password
        })
            .then(function (response) {
                setLoading(false);
                if (response.status === 200) {
                    setError(false);
                    toast.success('Login successful.');
                    navigate('/layout/foods');
                } else {
                    setError(true);
                    toast.error('Invalid username or password');
                }
            })
            .catch(function (error) {
                setLoading(false);
                console.log(error);
                toast.error('Invalid username or password');
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
                    {error && <p className={style.error}>Invalid username or password</p>}
                    <button type="submit" disabled={loading}>{loading ? "Loading... " : "Sign in"}</button>
                </form>
            </div>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    );
}

export default LoginScreen;
