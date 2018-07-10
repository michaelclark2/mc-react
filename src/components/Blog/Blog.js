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
  selectBlog = (e) => {
    this.setState({selectedBlog: e.target.id});
  }
  render () {
    const blogPosts = this.state.blogs.map(blog => {
      return (
        <BlogPost blog={blog} key={blog.id} />
      );
    });
    const blogTitles = this.state.blogs.map(blog => {
      return (
        <div key={blog.id} className="panel-block">
          <a onClick={this.selectBlog} id={blog.id} className="content is-small">{blog.title}</a>
        </div>
      );
    });
    return (
      <div className="Blog columns">
        <aside className="column is-3">
          <nav className="panel">
            <p className="panel-heading">
              Blog Posts
            </p>
            <a onClick={e => {this.setState({selectedBlog: ''})}} className="panel-block">View All</a>
            {blogTitles}
          </nav>
        </aside>
        <main className="column">
          {this.state.selectedBlog ? blogPosts.filter(component => component.props.blog.id === this.state.selectedBlog) : blogPosts}
        </main>
      </div>
    );
  }
};
export default Blog;
