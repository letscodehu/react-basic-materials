import { useLoaderData } from "react-router-dom"
import React from 'react'
export default function Accounts() {
    const data = useLoaderData()
    console.log(data)
    const rows = data.map(account => {
        return <tr>
            <td>{account.id}</td>
            <td>{account.name}</td>
        </tr>
    })
    console.log(rows)
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>)
}
