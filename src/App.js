import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor () {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('/items').then(response => {
      this.setState({items: response.data.items})
      console.log(this.state.items);
    })
    .catch(error => console.log(error));
  }

  render() {
    const listOfItems = this.state.items.map(item => (
      <div key={ item.id }>
        Item name: <span>{ item.name }</span>
      </div>
    ))
    return (
      <div className="App">
        <h1>Basic React app</h1>
        <div className="container">
          <div className="inner-container">
            { listOfItems }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
