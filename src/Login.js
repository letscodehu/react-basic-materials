import { useState } from "react"
import ErrorLabel from "./components/ErrorLabel"
import Input from "./components/Input"
import Button from "./components/Button"
import "./Login.css"
export default function Login() {
    const [username, setUsername] = useState({ value: "", dirty: false })
    const [password, setPassword] = useState({ value: "", dirty: false })
    function validUser() {
        return !username.dirty || username.value.match(/^[a-z]+$/)
    }
    function validPassword() {
        return !password.dirty || password.value.length > 8
    }
    return (
        <div id="login-form">
            <Input type="text" field={username} placeholder="Username" setter={setUsername} />
            <ErrorLabel validator={validUser} message="Username must be lowercase only" />
            <Input type="password" field={password} placeholder="Password" setter={setPassword} />
            <ErrorLabel validator={validPassword} message="Password must be at least 8 characters" />
            <Button text="Login"></Button>
            <p className="message">Not registered? <a href="">Create an account</a></p>
        </div>
    )
}
