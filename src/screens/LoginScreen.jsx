import React, { useState } from 'react';
import style from '../styles/loginScreen.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');


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
                if (response.status === 200) {
                    setError(false);
                    toast('Login successfully.');
                    navigate('/layout/foods');
                } else {
                    setError(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                toast.error('invalid username or password')
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
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
}

export default LoginScreen;
