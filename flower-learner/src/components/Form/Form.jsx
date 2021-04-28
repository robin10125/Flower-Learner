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
  handleSubmit = async (evt) => {
    evt.preventDefault()

    // First we build the body
    let body = { image: this.state.image }
    
    // We need an options object for our fetch call
    let options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    console.log('handleSubmit initiated, body: ', body)
    // Now for the fetch call
    await fetch("/api/image", options)
      .then(res => res.json())
      .then(this.setState({ image: null }))
      .catch(error => {console.error("Error:", error)})
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