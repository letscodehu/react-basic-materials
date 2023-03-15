import './Register.css'
import { useState } from "react"
import ErrorLabel from "../components/ErrorLabel"
import Input from "../components/Input"
import Button from "../components/Button"
import auth from "../services/auth"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
    const [username, setUsername] = useState({ value: "", dirty: false })
    const [password, setPassword] = useState({ value: "", dirty: false })
    const [passwordConfirmation, setPasswordConfirmation] = useState({ value: "", dirty: false })
    const [registerError, setRegisterError] = useState({ message: "", error: false })
    const navigate = useNavigate()
    function validUser() {
        return !username.dirty || username.value.match(/^\S+@\S+.\S+$/)
    }
    function validPassword() {
        return !password.dirty || password.value.length >= 8
    }
    function matchingPassword() {
        return !password.dirty || !passwordConfirmation.dirty || password.value === passwordConfirmation.value
    }
    function register() {
        setRegisterError({ error: false })
        auth.register(username.value, password.value)
            .then(() => navigate("/")).catch(error =>
                setRegisterError({ message: error, error: true })
            )
    }
    return (
        <div id="register-form">
            <Input type="text" field={username} placeholder="Email" setter={setUsername} />
            <ErrorLabel validator={validUser} message="Please provide a valid e-mail" />
            <Input type="password" field={password} placeholder="Password" setter={setPassword} />
            <Input type="password" field={passwordConfirmation} placeholder="Password confirmation" setter={setPasswordConfirmation} />
            <ErrorLabel validator={validPassword} message="Password must be at least 8 characters" />
            <ErrorLabel validator={matchingPassword} message="Passwords does not match" />
            <Button handler={register} text="Register"></Button>
            <ErrorLabel validator={() => !registerError.error} message={registerError.message} />
            <p className="message">Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
    )
}
