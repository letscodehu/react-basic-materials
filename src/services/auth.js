function login(email, password) {
    return fetch("http://localhost:3000/login", {
        "method": "POST",
        "headers": {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        "body": JSON.stringify({ email, password })
    })
        .then(r => r.json())
        .then((content) => {
            if (typeof content === 'string') throw content
            else {
                user = content;
                return content
            }
        })
}

function register(email, password) {
    return fetch("http://localhost:3000/register", {
        "method": "POST",
        "headers": {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        "body": JSON.stringify({ email, password })
    })
        .then(r => r.json())
        .then((content) => {
            if (typeof content === 'string') throw content
            else {
                user = content;
                return content
            }
        })
}
let user = null

function loggedIn() {
    return user != null;
}
const Auth = { login, loggedIn, register }
export default Auth
