import React from 'react';
import './Blog.css';
import {getBlogs} from '../../firebase/blogs';
import BlogPost from '../BlogPost/BlogPost';

class Blog extends React.Component {
  state = {
    blogs: [],
    selectedBlog: '',
  }
  componentDidMount () {
    getBlogs().then(blogs => {
      this.setState({blogs});
    }).catch(err => {
      console.error('Error getting blogs', err);
    });
  }
  render () {
    const blogPosts = this.state.blogs.map(blog => {
      return (
        <BlogPost blog={blog} key={blog.id} />
      );
    });
    return (
      <div className="Blog columns">
        <aside className="column is-3">
          <h1>Blog titles go here</h1>
        </aside>
        <main className="column">
          {blogPosts}
        </main>
      </div>
    );
  }
};
export default Blog;
