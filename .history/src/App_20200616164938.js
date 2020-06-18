import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/'
import EmploymentStatusPage from './pages/EmploymentStatus';
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <EmploymentStatusPage/>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
