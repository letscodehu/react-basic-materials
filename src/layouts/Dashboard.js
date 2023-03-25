import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import './Dashboard.css'

export default function Dashboard() {
    return <div className="grid-container">
        <Header />
        <Sidebar />
        <main className="main">
            <Outlet />
        </main>
        <Footer />
    </div>

}

