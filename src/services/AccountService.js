function all() {
    return fetch("http://localhost:3000/accounts").then(r => r.json())
        .then((content) => {
            if (typeof content === 'string') throw content
            return content
        })

}
const AccountService = { all }
export default AccountService;
