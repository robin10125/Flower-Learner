// components/Form/Form.jsx
import { Component } from 'react';

export default class Form extends Component {
  state = {
    image: null
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }   
  handleSubmit = async () => {
    // First we build the body
    let body = { image: this.state.image }
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
      .then(this.setState({ image: null }))
  }
  render() {
    return(
      <div>
        <div id = "image-container">
            <img href = ''></img>
        </div>
        <input type="file" name='image' onChange={this.handleChange}></input>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}