// components/Form/Form.jsx
import { Component } from 'react';

export default class Form extends Component {
  state = {
    content: ""
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }   
  handleSubmit = async () => {
    // First we build the body
    let body = { content: this.state.content }
    // We need an options object for our fetch call
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    // Now for the fetch call
    await fetch("/api", options)
      .then(res => res.json())
      .then(this.setState({ content: "" }))
  }
  render() {
    return(
      <div>
        <input type="file" name='image'></input>
        <textarea 
          name="content"
          onChange={this.handleChange}
          value={this.state.content}></textarea>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}