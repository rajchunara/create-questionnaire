import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Editor from './Components/Editor';
import Preview from './Components/Preview';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App"> 
          <div className="row">
            <Navbar/>
            <Route exact path="/" component={Editor}/>
            <Route exact path="/preview" component={Preview}/>
          </div>   
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
