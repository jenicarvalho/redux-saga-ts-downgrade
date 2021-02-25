import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

import Usuarios from './pages/Usuarios'

function App() {

  return (
    <Provider store={store}>
      <Usuarios />
    </Provider>
  );
}

export default App;
