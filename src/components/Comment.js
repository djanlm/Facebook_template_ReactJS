import React, { Component } from 'react';

class Comment extends Component {
  render(){
    return (

      <li className="comment">
        <img src={this.props.data.author.avatar} />
        <div id="comment_content"><strong>{this.props.data.author.name} </strong>{this.props.data.content}</div>
      </li>
    );
  }
}

export default Comment;