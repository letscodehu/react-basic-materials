import { useState } from "react"
import ErrorLabel from "./components/ErrorLabel"
import Input from "./components/Input"
import Button from "./components/Button"
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
            <Input type="text" value={username} setter={setUsername} />
            <ErrorLabel validator={validUser} message="Username must be lowercase only" />
            <Input type="password" value={password} setter={setPassword} />
            <ErrorLabel validator={validPassword} message="Password must be at least 8 characters" />
            <Button text="Login"></Button>
            <p className="message">Not registered? <a href="">Create an account</a></p>
        </div>
    )
}
