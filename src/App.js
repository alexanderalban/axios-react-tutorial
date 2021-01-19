import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      arrayOfBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then( res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer })
      })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        {/*map of this.state.arrayOfBeer */}
      </header>
    </div>
  );
}
}

export default App;
