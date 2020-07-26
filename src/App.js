import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import uniqid from 'uniqid';
import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';


const App = () => {
  return (
      <Fragment>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
      </Fragment>
  );
}

export default App;
