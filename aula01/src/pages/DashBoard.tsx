import { useNavigate } from "react-router-dom"

export const DashBoard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <div>
      <p>Página de DashBoard</p>
      <button onClick={ handleClick }>Redirecionanmento</button>
    </div>
  )
}