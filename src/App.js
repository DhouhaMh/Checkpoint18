import React from "react";
import {Switch,Route} from "react-router-dom";

import MovieApp from "./MovieApp";
import DescriptionCard from './components/DescriptionCard'
 
export default function App() {



  return (
      <div className="App">
        <Switch>

          <Route path="/" exact component={MovieApp} />
          <Route path="/description/:id" render={(props) => <div><DescriptionCard {...props}/></div>} />
          
        </Switch>
 
      </div>
  );
}
