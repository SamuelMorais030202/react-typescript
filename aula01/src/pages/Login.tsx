import { useEffect, useState } from "react"
import Timer from "../components/Time";

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    if (window.confirm('Você é homem ?')) {
      console.log('Homem')
    } else {
      console.log('Mulher');
    }
  }, []);

  const handleLogin = () => {
    console.log(user.email, user.password);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <Timer />
      <form>
        <label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={ user.email }
            onChange={ handleChangeInputs }
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            value={ user.password }
            onChange={ handleChangeInputs }
          />
        </label>
        <label>
          <button type="button" onClick={ handleLogin }>Login</button>
        </label>
      </form>
    </div>
  )
}