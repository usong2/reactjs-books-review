import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css'
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={Home} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;