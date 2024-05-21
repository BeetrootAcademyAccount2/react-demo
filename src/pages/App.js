import Landing from "./Landing";
import Login from "./Login";

function App() {
  const isLoggedIn = true;

  // if (!isLoggedIn) {
  //   return <Login />;
  // }
  // return <Landing />;
  return <div>{!isLoggedIn ? <Login /> : <Landing />}</div>;
}

export default App;
