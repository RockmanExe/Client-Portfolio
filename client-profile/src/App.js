import React from 'react';
import Name from '../src/name';
import NavBar from '../src/navbar';
import About from '../src/about';
import Works from '../src/works';
import Photos from '../src/photos';
import Thoughts from '../src/thoughts';
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to ='/'> <Name/> </Link>
      </header>

      <div className="mid-section">
          <Route exact path= '/'> Front page </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/works'>
            <Works />
          </Route><Route exact path='/photos'>
            <Photos />
          </Route><Route exact path='/thoughts'>
            <Thoughts />
          </Route>
      </div>
      
      <div className='footer'>
        <NavBar/>
      </div>
    </div>
  );
}

export default App;
