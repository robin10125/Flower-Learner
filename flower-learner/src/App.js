import { Component } from 'react';
import './App.css';
import Form from './components/Form/Form.jsx'
import Test from './components/Test/Test.jsx'

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Form />
        <hr/>
      </main>
    )
  }
}