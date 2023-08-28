import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import GamePage from './pages/GamePage/GamePage.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "game/:gameId",
    element: <GamePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
