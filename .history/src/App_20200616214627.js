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
import FillingStatus from './pages/FillingStatus';
import  from './pages/Proprietorships'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Router>
      <Switch>
    <Provider store={store}>
    <div className="App">
      <Header/>
      <EmploymentStatusPage/>
      <Footer/>
    </div>
    </Provider>
    </Switch>
    </Router>
  );
}

export default App;
