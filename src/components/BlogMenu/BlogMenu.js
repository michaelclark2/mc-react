import React from 'react';
import moment from 'moment';
import './BlogMenu.css';

class BlogMenu extends React.Component {
  state = {
    selectedYear: '',
    selectedMonth: '',
    selectedBlog: '',
  }
  viewAll = (e) => {
    this.props.viewAll();
    this.setState({
      selectedYear: '',
      selectedMonth: '',
      selectedBlog: '',
    });
  }
  selectMonthAndYear = (month, year) => {
    if (this.state.selectedMonth === month && this.state.selectedYear === year) {
      this.setState({selectedMonth: '', selectedYear: ''});
    } else {
      this.setState({
        selectedMonth: month,
        selectedYear: year,
      });
    }
  }
  selectBlog = (e) => {
    this.props.selectBlog(e);
    this.setState({selectedBlog: e.target.id});
  }
  render () {
    const createBlogGroups = () => {
      const {blogs} = this.props;
      const blogGroup = [];
      blogs.forEach(blog => {
        const month = moment(blog.date).month('').format('MMMM');
        const year = moment(blog.date).format('YYYY');
        const matchingGroup = blogGroup.find(x => x.month === month && x.year === year);
        if (matchingGroup) {
          matchingGroup.blogs.push(blog);
        } else {
          const newGroup = {
            month,
            year,
            blogs: [],
          };
          newGroup.blogs.push(blog);
          blogGroup.push(newGroup);
        }
      });
      return blogGroup;
    };
    const blogMenu = createBlogGroups().reduce((arr, curr) => {
      if (!arr.includes(curr.year)) {
        arr.push(curr.year);
      }
      return arr;
    }, []).map(year => {
      return (
        <div key={year}>
          <p className="menu-label">{year}</p>
          {
            createBlogGroups().filter(x => x.year === year).reduce((arr, curr) => {
              if (!arr.includes(curr.month)) {
                arr.push(curr.month);
              }
              return arr;
            }, []).map(month => {
              return (
                <ul key={month + year} className="menu-list">
                  <li><a onClick={(e) => this.selectMonthAndYear(month, year)} className={this.state.selectedMonth === month && this.state.selectedYear === year ? 'is-active' : ''}>{month}</a></li>
                  <li>
                    <ul className={this.state.selectedMonth !== month || this.state.selectedYear !== year ? 'is-hidden' : ''}>
                      {
                        createBlogGroups().filter(x => x.month === month && x.year === year).map(blog => {
                          return blog.blogs.map(post => {
                            if (this.state.selectedBlog === post.id) {
                              return (<li key={post.id}><a className="is-active" id={post.id} onClick={this.selectBlog}>{post.title}</a></li>);
                            } else {
                              return (<li key={post.id}><a id={post.id} onClick={this.selectBlog}>{post.title}</a></li>);

                            }
                          });
                        })
                      }
                    </ul>
                  </li>
                </ul>
              );
            })
          }
        </div>
      );
    });
    return (
      <aside className="BlogMenu menu is-small">
        <h1 className="title is-3">Blog</h1>
        <button className="button is-small" onClick={this.viewAll}>View All</button>
        {blogMenu}
      </aside>
    );
  }
};

export default BlogMenu;
