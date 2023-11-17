import { NavLink, Outlet } from "react-router-dom";
import "../styles/style.css";

function RootLayout() {
	return (
		<>
			<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : ""} style={{
                marginRight:"5px"
            }} to="/">Home</NavLink> <span style={{
                marginRight: "5px"
            }}>|</span>
            <NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : ""} style={{
                marginRight:"5px"
            }} to="/about">About</NavLink> <span style={{
                marginRight: "5px"
            }}>|</span>
			<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : ""} style={{
                marginRight:"5px"
            }} to="/blog">Blog</NavLink>
			<p />
			<Outlet />
		</>
	);
}

export default RootLayout;
