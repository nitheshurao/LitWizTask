
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import { useDispatch } from 'react-redux';
import Navbar from './Navbar/Navbar';
import PageDetails from './Page/PageDetails/PageDetails';
import { useEffect, useState } from 'react';



import Pages from './Page/Pages';
import Page from './Page/Pagee/Page';
import Home from './Page/Home';
import Form from './Form/Form';

function App() {


  return (
    <Router >

      <Navbar


      />




      <Switch>

        <Route exact path="/Pages"

          component={Home}



        />
        <Route exact path="/page" component={Page} />
        {/*  */}

        <Route exact path="/F"

          component={Form}



        />
        {/*  */}
        <Route
          path="/product/"
          // /product/${_id}
          // component={PageDetails}
          render={(props) => (
            <PageDetails {...props}
            />
          )}
        />





        {/* <Route path="/contact/:id" component={ContactDetail} /> */}


      </Switch>

    </Router>
  );
}

export default App;
