import { Link } from "react-router-dom"
import "./Sidebar.css"
export default function Sidebar( ) {
    return <aside className="aside">
        <ul className="aside_list">
        <li className="aside_list-item"><Link to="/">Home</Link></li>
        <li className="aside_list-item"><Link to="/contact">Contacts</Link></li>
        <li className="aside_list-item"><Link to="/asset">Assets</Link></li>
        </ul>
        </aside>
}


