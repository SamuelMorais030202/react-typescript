import { Link } from "react-router-dom"


export const Home = () => {
  return (
    <div>
      <p>Página de Home</p>
      <Link to="/login">Login</Link>
    </div>
  )
}