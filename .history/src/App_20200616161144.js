import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
    </div>
    </Provider>
  );
}

export default App;
