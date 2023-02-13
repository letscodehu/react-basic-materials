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
            else return content
        })
}

const Auth = { login }
export default Auth
