import axios from "axios";
import { useState } from "react";
import UserLists from "./UserLists";

export default function LoginComponent() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleFormSubmit(e) {
        var url = 'http://127.0.0.1:8000/api-token-auth/'

        axios.post(url, {username: username, password: password}).then(response => {
            localStorage.setItem('token', response.data.token)
            setToken(response.data.token)            
        })

        e.preventDefault()
    }

    function Logout() {
        localStorage.removeItem('token')
        setToken("")
    }

    if(!token) {
        return (
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" onChange={handleChangeUsername} value={username} />
                    <input type="password" onChange={handleChangePassword} value={password} />
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
    else { 
        return (
            <div>
                <UserLists />
                <button onClick={Logout}>Logout</button>
            </div>
        );
    }
}
