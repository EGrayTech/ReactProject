//Imports necessary React elements
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Imports needed css
import '../components/PostForm.css';

class PostForm extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      const title = this.getTitle.value;
      const message =  this.getMessage.value;
      const data = {
        title,
        message,
      }
      this.props.createPost(
        data);
      this.getTitle.value = '';
      this.getMessage.value = '';
    }
  render() {
  return (
  <div>
    <h3 className='subHeader'>Create Post</h3>
    <form onSubmit={this.handleSubmit}>
     <input required type="text" ref={(input)=>this.getTitle = input} 
      placeholder="Enter Post Title"/>
     <br /><br />
     <textarea required rows="10" ref={(input)=>this.getMessage = input} cols="35" 
      placeholder="Enter Post" />
     <br /><br />
     <button className="btn btn-primary">Post</button>
    </form>
  </div>
  );
  }
  }
  export default connect()(PostForm);