import { useReactiveVar } from "@apollo/client";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { darkTheme, GlobalStyles, whiteTheme } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode? darkTheme: whiteTheme}>
      <GlobalStyles />
    <div>
      <Router>
        <Switch>
        
        <Route path="/" exact>
          {  isLoggedIn ? <Home mode={darkMode}/> : <Login mode={darkMode}/> }
        </Route>
        <Route>
          <h1>404 Error</h1>
        </Route>
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
