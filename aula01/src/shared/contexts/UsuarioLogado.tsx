import { createContext, useCallback, useMemo, useState } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;

  values: {
    name: string;
    testContext?: () => void;
    handleChangeInputs: (event: React.ChangeEvent<HTMLInputElement>) => void;
    user: {
      email: string;
      password: string;
    };
    handleLogin: () => void;
  }
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProvider {
  children: React.ReactNode;
}
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProvider> = ({ children }) => {

  const name = 'testando';

  const testContext = useCallback(() => {
    console.log("Testeando");
  }, []);

  
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  
  const handleChangeInputs = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }, [user]);
  
  
  const handleLogin = useCallback(() => {
    console.log(user.email, user.password);
  }, [user.email, user.password]);

  const values = useMemo(() => ({
    name,
    testContext,
    user,
    handleChangeInputs,
    handleLogin,
  }), [name, testContext, user, handleChangeInputs, handleLogin]);

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Samuel', values }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
}