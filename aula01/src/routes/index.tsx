import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { DashBoard } from "../pages/DashBoard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={ <DashBoard /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="*" element={ <Navigate to="/pagina-inicial" /> } />
      </Switch>
    </BrowserRouter>
  )
}