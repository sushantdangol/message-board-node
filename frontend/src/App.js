import React from 'react';
import './App.css';

//import components
import NavBar from './components/NavBar';
import Post from './components/Posts';

//import store from redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <NavBar />
          <Post />
      </div>
    </Provider>
  );
}

export default App;
