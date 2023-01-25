import { useState } from "react"
import "./Login.css"
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function validUser() {
        return username.match(/^[a-z]+$/)
    }
    function validPassword() {
        return password.length > 8
    }
    return (
        <div id="login-form">
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            {
                !validUser() && <label className="error">Username must be lowercase only</label>
            }
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            {
                !validPassword() && <label className="error">Password must be at least 8 characters</label>
            }
            <button>Login</button>
            <p className="message">Not registered? <a href="">Create an account</a></p>
        </div>
    )
}
