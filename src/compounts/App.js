import React from 'react';
import './App.css';
import MainApp from './MainApp.js'
import {
  Switch,
  Route,
} from "react-router-dom";
import ShowOrderFinal from './ShowOrderFinal'
import LoginTotalPage  from './loginTotalPage.js'
import NoMatch from './NoMatch'
function App() {
  return (
    <div>
    <Switch>

      <Route exact path="/">
        <MainApp/>
      </Route>

      <Route exact path="/ShowOrderFinal" render = {(roter)=><ShowOrderFinal roter = {roter}/>}/>

      <Route exact path="/LoginTotalPage"
             render = {(roter)=>< LoginTotalPage roter = {roter}/>}/>
     <Route path="*">
            <NoMatch />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
// <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
