import React from 'react';
import './Blog.css';

import About from '../About/About';

class Blog extends React.Component {
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
