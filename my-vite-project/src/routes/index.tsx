import { Route, Routes as Switch } from "react-router-dom";
import Layout from "../components/layout";
import Coffe from "../pages/coffe";
import CoffeList from "../pages/coffe-list";
import Home from "../pages/home";
import NotFound from "../pages/not-found";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={ <Layout /> }>
        <Route index element={<Home />} />
        <Route path="/coffees" element={<CoffeList />} />
        <Route path="/coffees/:coffee" element={<Coffe />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Switch>
  )
}