import { useRef } from "react";
import { useNavigate } from "react-router-dom"

export const DashBoard = () => {
  const counterRef = useRef({
    counter: 0,
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <div>
      <p>Página de DashBoard</p>
      <p>contador: {counterRef.current.counter}</p>
      <button type="button" onClick={ () => counterRef.current.counter++ } >Somar</button>
      <button onClick={ handleClick }>Redirecionanmento</button>
    </div>
  );
}