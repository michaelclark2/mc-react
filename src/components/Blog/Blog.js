import React from 'react';
import './Blog.css';
import {getBlogs} from '../../firebase/blogs';
import BlogPost from '../BlogPost/BlogPost';
import BlogMenu from '../BlogMenu/BlogMenu';

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
      <div className="Blog columns">
        <aside className="column is-3">
          <h1 className="title is-3">Blog</h1>
          <BlogMenu
            viewAll={() => this.setState({selectedBlog: ''})}
            selectBlog={this.selectBlog}
            blogs={this.state.blogs}
          />
        </aside>
        <main className="column">
          {this.state.selectedBlog ? blogPosts.filter(component => component.props.blog.id === this.state.selectedBlog) : blogPosts}
        </main>
      </div>
    );
  }
};
export default Blog;
