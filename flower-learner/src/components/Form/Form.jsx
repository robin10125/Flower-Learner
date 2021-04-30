// components/Form/Form.jsx
import { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  state = {
    image: null,
  };

  checkState = () => {
      console.log(this.state.image)
      console.log("state: ", this.state)
  }
  handleChange = (evt) => {
    this.setState({ 
        image: evt.target.files[0],
        loaded: 0,
    });
  }  
   
  handleSubmit = async (evt) => {
    evt.preventDefault()

    let fileUrl = ''
    let fileName = ''

    const formData = new FormData()
    const formData2 = new FormData()
    formData.append('image', this.state.image )
    //axios.post("/api/image", formData, config)
    axios({
      method: "post",
      url: "api/image",
      data: formData,
      //possible error content type
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        fileUrl = response.fileUrl
        fileName = response.fileName
        formData2.append('url', fileUrl)
        formData2.append('name', fileName)
      })
    .then(
    //post to django server
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/post/",
      data: formData2,
      //possible error content type
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(errors => console.log(errors))
    )
    /*await fetch("http://127.0.0.1:8000/post/", options)
        .then(res => res.json())  
        .catch(error => {console.error("Error:", error)}))*/
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
        <button onClick={this.checkState}>Check State</button>
      </div>
    )
  }
}