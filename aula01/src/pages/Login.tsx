import { useCallback, useRef, useState } from "react"
import { Button } from "../components/Button";
import { InputLogin } from "../components/InputLogin";
import Timer from "../components/Time";
// import { UsuarioLogadoContext } from "../shared/contexts";
import { useLoginContext } from "../shared/hooks";

export const Login = () => {
  const { values, nomeDoUsuario } = useLoginContext();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const refInput = useRef<HTMLInputElement>(null);

  // const userLog = useContext(UsuarioLogadoContext);

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
      <p>Usuario logado: { nomeDoUsuario }</p>
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
      <p>{ values.name }</p>
      <button type="button" onClick={ values.testContext }>Test</button>
      <Button handleLogin={ handleLogin } type="button">Login</Button>
    </div>
  )
}