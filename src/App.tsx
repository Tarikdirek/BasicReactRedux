import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { Provider } from 'react-redux';
import {store} from './app/store';

function App() {
  return (
    <Provider store={store}>
        <div >
          <Counter/>
        </div>
    </Provider>
   
  );
}

export default App;
