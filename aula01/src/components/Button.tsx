import React from "react";

interface IButtonLoginProps {
  type?: "button" | "submit" | "reset";
  handleLogin: () => void;
  
  children: React.ReactNode;
}
export const Button: React.FC<IButtonLoginProps> = ({ handleLogin, children, type }) => {
  return (
    <button type={ type } onClick={ handleLogin }>{ children }</button>
  );
}; 