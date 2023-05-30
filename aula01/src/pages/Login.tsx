import { useCallback, useRef, useState } from "react"
import { Button } from "../components/Button";
import { InputLogin } from "../components/InputLogin";
import Timer from "../components/Time";

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const refInput = useRef<HTMLInputElement>(null);

  const handleChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = useCallback(() => {
    console.log(user.email, user.password);
  }, [user.email, user.password]);

  return (
    <div>
      <h1 ref={refInput}>Login Page</h1>
      <Timer />
      <InputLogin
        label="Email"
        name="email"
        type="email"
        onChange={ handleChangeInputs }
        value={ user.email }
        onPressEnter={() => refInput.current?.focus()}
      />
      <InputLogin
        label="Password"
        type="password"
        name="password"
        ref={refInput}
        onChange={ handleChangeInputs }
        value={ user.password }
      />
      <Button handleLogin={ handleLogin } type="button">Login</Button>
      {/* <label>
        <button type="button" onClick={ handleLogin }>Login</button>
      </label> */}
    </div>
  )
}