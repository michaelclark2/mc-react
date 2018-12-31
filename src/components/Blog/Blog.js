import React from 'react';
import './Blog.scss';
import getBlogs from '../../api/blogs';
import BlogPost from '../BlogPost/BlogPost';
import BlogMenu from '../BlogMenu/BlogMenu';
import moment from 'moment';

class Blog extends React.Component {
  state = {
    blogs: [],
    selectedBlog: ''
  }
  componentDidMount () {
    getBlogs()
      .then(blogs => {
        blogs.sort((a, b) => {
          a = moment(a.created_at);
          b = moment(b.created_at);
          if (a.isSame(b)) return 0;
          return a.isBefore(b) ? 1 : -1;
        });
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

          {this.state.selectedBlog ? blogPosts.filter(component => component.props.blog.id === Number(this.state.selectedBlog)) : blogPosts}
        </div>
      </div>
    );
  }
};
export default Blog;
