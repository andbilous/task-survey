import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EmploymentStatusPage from './pages/EmploymentStatus';
import FillingStatusPage from './pages/FillingStatus';
import ProprietorshipsPage from './pages/Proprietorships';
import ScorePage from './pages/Score';
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Router>
    <Provider store={store}>
    <Switch>
    <div className="App">
      <Header/>
      <Route path="/employment-status">
            <EmploymentStatusPage />
          </Route>
          <Route path="/filling-status">
            <FillingStatusPage />
          </Route>
          <Route path="/filling-status">
            <FillingStatusPage />
          </Route>
          <Route path="/prop">
            <FillingStatusPage />
          </Route>
      <Footer/>
    </div>
    </Switch>
    </Provider>
    </Router>
  );
}

export default App;
