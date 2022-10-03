import { Routes as RoutesCollection, Route } from "react-router-dom";
import { Login } from "./Login";

export function Routes () {
  return (
    <RoutesCollection>
      <Route path="/" element={<Login />} /> 
    </RoutesCollection>
  );
}
