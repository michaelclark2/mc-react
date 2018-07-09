import React from 'react';
import './Blog.css';
import {getBlogs} from '../../firebase/blogs';
import About from '../About/About';

class Blog extends React.Component {
  state = {
    blogs: [],
  }
  componentDidMount () {
    getBlogs().then(blogs => {
      this.setState({blogs});
    }).catch(err => {
      console.error('Error getting blogs', err);
    });
  }
  render () {
    return (
      <div className="Blog columns">
        <aside className="column is-3">asidedd</aside>
        <main className="column">
          <About/>
        </main>
      </div>
    );
  }
};
export default Blog;
