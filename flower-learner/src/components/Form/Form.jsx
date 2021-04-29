// components/Form/Form.jsx
import { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  state = {
    image: null,
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

    const formData = new FormData()
    formData.append('image', this.state.image, this.state.image.name )
     
    //axios.post("/api/image", formData, config)
    axios({
      method: "post",
      url: "api/image",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
      
    /*await fetch("/api/image", options)
      .then(res => res.json())  
      .then(this.setState({ text: ''}))
      .catch(error => {console.error("Error:", error)})*/
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