import React, { Component } from 'react';
import './App.scss';
import {UIShell} from "./content/UIShell/UIShell.tsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        <UIShell />
      </div>
    );
  }
}

export default App;
