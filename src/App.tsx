import * as React from 'react';
import './App.css';
import CrystalBallTable from "./components/CrystalBallTable";

class App extends React.Component {
  render() {
    return (
      <div className="app-root">
        <h1 className="app-header">Crystal Ball</h1>
        <CrystalBallTable/>
      </div>
    );
  }
}

export default App;
