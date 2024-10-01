import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import RPG from "./pages/RPG";
import Quiz from "./pages/Quiz";
import Memory from "./Components/Memory";
import FinancialSpline from "./Components/styles/FinancialSpline";
import Passageway from "./Components/Hallway";
import Iframe from "./Components/Iframe";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/rpg",
    element: <RPG />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/memory",
    element: <Memory />,
  },
  {
    path: "/financeSpline",
    element: <FinancialSpline />,
  },
  {
    path: "/iframe",
    element: <Iframe />,
  },
]);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
