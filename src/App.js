import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
//import FilterBar from './components/filterBar';
import ResultTable from './components/resultTable';

class App extends Component {

  render() {

    return (
    <div className="App">
      
      <Header />
     

      <ResultTable />
    </div>
    );
}

}

export default App;
