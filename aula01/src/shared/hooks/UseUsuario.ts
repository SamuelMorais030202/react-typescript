import { useContext } from "react"
import { UsuarioLogadoContext } from "../contexts";

export const useLoginContext = () => {
  const context = useContext(UsuarioLogadoContext);
  return context;
}