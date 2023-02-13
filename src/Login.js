import { useState } from "react"
import ErrorLabel from "./components/ErrorLabel"
import Input from "./components/Input"
import Button from "./components/Button"
import "./Login.css"
import auth from "./services/auth"

export default function Login() {
    const [username, setUsername] = useState({ value: "", dirty: false })
    const [password, setPassword] = useState({ value: "", dirty: false })
    const [loginError, setLoginError] = useState({ message: "", error: false })
    function validUser() {
        return !username.dirty || username.value.match(/^\S+@\S+.\S+$/)
    }
    function validPassword() {
        return !password.dirty || password.value.length >= 8
    }
    function login() {
        setLoginError({ error: false })
        auth.login(username.value, password.value)
            .then().catch(error =>
                setLoginError({ message: error, error: true })
            )
    }
    return (
        <div id="login-form">
            <Input type="text" field={username} placeholder="Email" setter={setUsername} />
            <ErrorLabel validator={validUser} message="Please provide a valid e-mail" />
            <Input type="password" field={password} placeholder="Password" setter={setPassword} />
            <ErrorLabel validator={validPassword} message="Password must be at least 8 characters" />
            <Button handler={login} text="Login"></Button>
            <ErrorLabel validator={() => !loginError.error} message={loginError.message} />
            <p className="message">Not registered? <a href="">Create an account</a></p>
        </div>
    )
}
