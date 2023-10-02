import NavBar from "../nav-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span>Trybe - todos os direitos reservados</span>
      </footer>
    </>
  )
}