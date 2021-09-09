import { useState } from 'react'

function Login({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({ username }),
        })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                type='text' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}>
            </input>
            <label>Password</label>
            <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>
            <button>Submit</button>
        </form>
    )
}

export default Login