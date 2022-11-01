import axios from "axios";
import { useState } from "react";
import Home from "./Home";


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    function handleChangeUsername(event) {
        setUsername(event.target.value)
    }
    
    function handleChangePassword(event) {
        setPassword(event.target.value)
    }
    
    function handleFormSubmit(event) {
        axios.post("http://127.0.0.1:8000/api-token-auth/", {
            "username": username,
            "password": password
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            setToken(res.data.token)
        })

        event.preventDefault();
    }

    if (!token)
        return (
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={username} onChange={handleChangeUsername} />
                <input type="password" value={password} onChange={handleChangePassword} />
                <button type="submit">Logar</button>
            </form>
        );
    else return <Home />
}
