import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coffees" state={{ name: "Samuel" }}>Cafés</NavLink>
    </nav>
  )
}