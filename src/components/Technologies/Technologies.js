import React from 'react';
import './Technologies.css';

const techs = {
  HTML: 'devicon-html5-plain colored',
  CSS: 'devicon-css3-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  'C#': 'devicon-csharp-plain colored',
  jQuery: 'devicon-jquery-plain-wordmark colored',
  Git: 'devicon-git-plain colored',
  GitHub: 'devicon-github-plain colored',
  Bootstrap: 'devicon-bootstrap-plain colored',
  npm: 'fab fa-npm',
  Grunt: 'devicon-grunt-plain colored',
  webpack: 'devicon-webpack-plain colored',
  Sass: 'devicon-sass-original colored',
  React: 'devicon-react-original colored',
  Slack: 'fab fa-slack-hash',
  Illustrator: 'devicon-illustrator-line colored',
  Photoshop: 'devicon-photoshop-line colored',
};

class Technologies extends React.Component {
  render () {
    return (
      <div className="Technologies columns is-mobile is-multiline">
        {
          Object.entries(techs).map(tech => {
            const name = tech[0];
            const className = tech[1];
            return (
              <div key={name} className="column is-3">
                <i className={className}></i>
              </div>
            );
          })
        }
      </div>
    );
  }
};

export default Technologies;
