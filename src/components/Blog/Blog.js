import React from 'react';
import './Blog.scss';
import {getBlogs} from '../../firebase/blogs';
import BlogPost from '../BlogPost/BlogPost';
import BlogMenu from '../BlogMenu/BlogMenu';

class Blog extends React.Component {
  state = {
    blogs: [],
    selectedBlog: ''
  }
  componentDidMount () {
    getBlogs().then(blogs => {
      this.setState({blogs});
    }).catch(err => {
      console.error('Error getting blogs', err);
    });
  }
  selectBlog = (e) => {
    this.setState({selectedBlog: e.target.id});
  }
  render () {
    const blogPosts = this.state.blogs.map(blog => {
      return (
        <BlogPost blog={blog} key={blog.id} />
      );
    });
    return (
      <div className="Blog section">
        <BlogMenu
          viewAll={() => this.setState({selectedBlog: ''})}
          selectBlog={this.selectBlog}
          blogs={this.state.blogs}
        />
        <div className="blog-container">

          {this.state.selectedBlog ? blogPosts.filter(component => component.props.blog.id === this.state.selectedBlog) : blogPosts}
        </div>
      </div>
    );
  }
};
export default Blog;
