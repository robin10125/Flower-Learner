// components/Form/Form.jsx
import { Component } from 'react';

export default class Test extends Component {
  state = {
    text: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }   
  handleSubmit = async (evt) => {
    evt.preventDefault() 

    console.log('handlesubmit initiated')
    let body = { text: this.state.text }
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    // Now for the fetch call
    await fetch("/api/test", options)
      .then(res => res.json())
      .catch(error => {console.error("Error:", error)})
      .then(this.setState({ text: ''}))
  }
  render() {
    return(
      <div>
        <h3>Test</h3>
        <input type="text" name='text' onChange={this.handleChange}  value={this.state.text}></input>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}