import React from 'react';
import Comment from './Comment';

function Post ({ data }) {
  const { author, date, content, comments} = data;
  return (
      <li>
        <div id="post">
          <div id="post_header">
            <img src={author.avatar} />
            <div>
              <p>{author.name}</p>
              <span>{date}</span>
            </div>
          </div>
          <p id="content">{content}</p>
          <div id="rectangle"></div>
          <ul id="comment_list">
            {comments.map(comment=> <Comment key={comment.id} data={comment}/> )} 
          </ul>
        </div>
      </li>
  );

}

export default Post;