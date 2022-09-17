import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DressForm from './components/DressForm';
import NavBar from './components/NavBar';
import DressList from './components/DressList'
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import DressPreview from './components/DressPreview';
import Home from './components/Home';

function App() {
  const Container = styled.div`
    font-family: papyrus;
  `
  
  const [dresslist, setDresslist] = useState([])

  useEffect (() => {
    fetch("http://localhost:4000/dresses")
      .then(r => r.json())
      .then(data => setDresslist(data))
  }, [])

  
  return (
    <Container>
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/dresses/new" render={() => <DressForm setDresslist={setDresslist} /> } />
        <Route exact path="/">
          <Home />    
        </Route>
        <Route 
          exact path="/dresses" 
          render={() => <DressList dresslist={dresslist} />} />
        <Route exact path="/dresses/:id" render={() => <DressPreview /> } />
      </Switch>
    </Router>
    </Container>
  );
}

export default App;
