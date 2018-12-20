import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import NavItems from '../NavItems/NavItems';

class Header extends React.Component {

  state = {
    isHidden: false,
    prevScrolled: false
  }
  componentDidMount () {
    window.onscroll = (e) => {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (y > 100) {
        this.setState({isHidden: true, prevScrolled: false});
      }
      else if (this.state.isHidden && y < 100) {
        this.setState({isHidden: false, prevScrolled: true});
      }
    };
  }
  render () {
    let hiddenClass = this.state.isHidden ? 'title shrink' : 'title';
    hiddenClass = this.state.prevScrolled ? hiddenClass + ' unshrink' : hiddenClass;
    return (
      <nav className="Header">
        <div className={hiddenClass}>
          <h1><Link to="/">Michael Clark</Link></h1>
          <h2 className="subtitle">Full Stack Developer</h2>
        </div>
        <NavItems/>
      </nav>
    );
  }
}
export default Header;
