import { useState } from "react";
import Header from "./Header";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Info from "./Info";
import React from "react";
import { ThemeProvider } from "./context/Theme";

function App() {
  //const isLoggedIn = true;

  // if (!isLoggedIn) {
  //   return <Login />;
  // }
  // return <Landing />;
  // return <div>{!isLoggedIn ? <Login /> : <Landing />}</div>;

  const [page, setPage] = useState("info");

  return (
    <ThemeProvider>
      <Header setPage={setPage} />
      <div className="m-3">
        {page === "landing" && <Landing />}
        {page === "login" && <Login />}
        {page === "register" && <Register />}
        {page === "info" && <Info />}
      </div>
    </ThemeProvider>
  );
}

export default App;
