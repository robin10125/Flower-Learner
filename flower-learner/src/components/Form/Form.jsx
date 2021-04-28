// components/Form/Form.jsx
import { Component } from 'react';

export default class Form extends Component {
  state = {
    image: null
  };

  checkState = () => {
      console.log(this.state.image)
  }
  handleChange = (evt) => {
    this.setState({ 
        [evt.target.name]: evt.target.files[0],
        loaded: 0,
    });
  }   
  handleSubmit = async () => {
    console.log('handleSubmit initiated')
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
    await fetch("/api/image", options)
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
        <button onClick={this.checkState}>Check State</button>
      </div>
    )
  }
}