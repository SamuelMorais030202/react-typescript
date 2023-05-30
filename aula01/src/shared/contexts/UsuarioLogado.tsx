import { createContext, useCallback, useMemo } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;

  values: {
    name: string;
    testContext?: () => void;
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

  const values = useMemo(() => ({
    name,
    testContext,
  }), [name, testContext]);

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Samuel', values }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
}