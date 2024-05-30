import { useState } from "react";
import Header from "./Header";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Info from "./Info";
import React from "react";
import { ThemeProvider } from "./context/Theme";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RouterLayout from "./RouterLayout";
import NotFound from "./NotFound";
import CardList, { fetchData } from "./CardList";
import CardDetails, { fetchProduct } from "./CardDetails";
import CardLayout from "./CardLayout";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="info" element={<Info />} />
      <Route path="list" element={<CardLayout />}>
        <Route
          index
          element={<CardList />}
          loader={fetchData}
          errorElement={<ErrorPage />}
        ></Route>
        <Route
          path=":id"
          element={<CardDetails />}
          loader={fetchProduct}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "info",
        element: <Info />,
      },
    ],
  },
]);
*/
function App() {
  // Old way of ROuting, prior to 6.4
  // return (
  //   <BrowserRouter>
  //     <header>
  //       <Header />
  //     </header>
  //     <main>
  //       <Routes>
  //         <Route path="/" element={<Landing />} />
  //         <Route path="login" element={<Login />} />
  //         <Route path="register" element={<Register />} />
  //         <Route path="info" element={<Info />} />
  //       </Routes>
  //     </main>
  //   </BrowserRouter>
  // );
  //New way of routing

  return <RouterProvider router={router} />;
}

export default App;
