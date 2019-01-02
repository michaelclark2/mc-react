import React from 'react';
import moment from 'moment';
import './BlogPost.scss';

class BlogPost extends React.Component {
  render () {
    const {blog} = this.props;
    return (
      <div className="BlogPost box content">
        <h2 className="title">{blog.title}</h2>
        <h6 className="subtitle is-7">{moment(blog.created_at).format('LL')}</h6>
        <p className="content" dangerouslySetInnerHTML={{__html: blog.body}}></p>
      </div>
    );
  }
};

export default BlogPost;
