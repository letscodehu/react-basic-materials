import { NavLink } from "react-router-dom"
import "./Sidebar.scoped.css"
export default function Sidebar( ) {
    return <aside className="aside">
        <ul className="aside_list">
        <li className="aside_list-item"><NavLink to="/">Accounts</NavLink></li>
        <li className="aside_list-item"><NavLink to="/contact">Contacts</NavLink></li>
        <li className="aside_list-item"><NavLink to="/asset">Assets</NavLink></li>
        </ul>
        </aside>
}


