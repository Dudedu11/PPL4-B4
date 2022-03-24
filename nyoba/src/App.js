import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      Pegawais: []
    }
  }
  componentWillMount(){
  const url = 'http://localhost:1337/api/pegawais'

  axios.get(url)
  .then( uyy => {
    this.setState({
      pegawais: uyy.data.results
    })
  })
  }

  render(){
    return(
    <div>
      {this.state.Pegawais.map( (pegawai,idx) => {
        return (
          <div key={idx}>{pegawai.nama}</div>
        )
      })}
    </div>
    )}
}

export default App;