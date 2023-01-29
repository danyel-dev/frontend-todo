import axios from "axios";
import { useState } from "react";

export default function LoginComponent() {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }


    function handleFormSubmit(e) {
        var url = 'http://127.0.0.1:8000/api-token-auth/'

        axios.post(url, {username: Username, password: Password}).then(response => localStorage.setItem('token', response.data))

        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleChangeUsername} value={Username} />
                <input type="password" onChange={handleChangePassword} value={Password} />
                <button>Enviar</button>
            </form>
        </div>
    );
}
