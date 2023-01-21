const e = React.createElement
function loginButton() {
    const [loggedIn, setLoggedIn] = React.useState(false)
    if (loggedIn == true) {
        return 'You are logged in!'
    }
    return e('button', { onClick: () => setLoggedIn(true) }, 'Login')
}
const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)

root.render(React.createElement(loginButton))
