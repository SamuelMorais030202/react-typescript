import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { DashBoard } from "../pages/DashBoard";
import { Home } from "../pages/Home";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={ <DashBoard /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="*" element={ <Navigate to="/pagina-inicial" /> } />
      </Switch>
    </BrowserRouter>
  )
}