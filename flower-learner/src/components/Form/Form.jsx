// components/Form/Form.jsx
import { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  state = {
    image: null,
    serverImageName: '',
    serverImageUrl: ''
  };
 
  //set file to state image
  handleChange = (evt) => {
    this.setState({ 
        image: evt.target.files[0],
        loaded: 0,
    });
  }  
   
  //post file to express server
  handleSubmit = async (evt) => {
    evt.preventDefault()
    let fileUrl = ''
    let fileName = ''
    const formData = new FormData()

    formData.append('image', this.state.image )
   
    axios({
      method: "post",
      url: "api/image",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then( (response) => {
        console.log('response', response);
        fileUrl = response.data.url
        fileName = response.data.name
        console.log(fileUrl)

        this.setState({
          serverImageName: fileName,
          serverImageUrl: fileUrl
        })
      })
  }

  //sends post to Django server
  predict = async () => {
    
    let body = {name: this.state.fileName, url: this.state.fileUrl}
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),  
    }  

    //fetch Django server throough CORS proxy set up on Heroku
    await fetch("https://stark-forest-67198.herokuapp.com/http://127.0.0.1:8000/post/", options)
        .then(res => res.json())  
        .catch(error => {console.error("Error:", error)})
}

  //check state elements for debugging
  checkState = () => {
    console.log(this.state)
  }
  
  render() {
    return(
      <div>
        <div id = "image-container">
            <img href = ''></img>
        </div>
        <input type="file" name='image' onChange={this.handleChange}/>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
        <button onClick={this.predict}>Make prediction</button>
        <button onClick={this.checkState}>Check State</button>
      </div>
    )
  }
}