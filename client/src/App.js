import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LoginForm";
import Stocks from "./components/Stocks"
import Signup from "./components/SignupForm";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

// Jason's edits for now: comment out all of returned JSX, render page 'Main' components working on
// import them here:
import Main from "./pages/Main";

function App() {


  return (
    // <Router>
    //   <div>
    //     {/* <Nav /> */}
    //     <Switch>
    //       <Route exact path={["/", "/login"]}>
    //         <Login />
    //       </Route>
    //       <Route exact path="/stocks">
    //         <Stocks />
    //       </Route>
    //       <Route exact path="/signup">
    //         <Signup />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>


    <>
      <Main />
    </>
  );
}

export default App;
