import React from 'react';
import './Technologies.scss';

const techs = {
  HTML: 'devicon-html5-plain colored',
  CSS: 'devicon-css3-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  React: 'devicon-react-original colored',
  'C#': 'devicon-csharp-plain colored',
  'SQL Server': 'fas fa-database',
  Firebase: 'firebase',
  jQuery: 'devicon-jquery-plain colored',
  Git: 'devicon-git-plain colored',
  GitHub: 'devicon-github-plain colored',
  Bootstrap: 'devicon-bootstrap-plain colored',
  Grunt: 'devicon-grunt-plain colored',
  Sass: 'devicon-sass-original colored',
  'Visual Studio': 'devicon-visualstudio-plain colored',
  Illustrator: 'devicon-illustrator-line colored',
  Photoshop: 'devicon-photoshop-line colored'
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
                <abbr title={name}><i className={className}></i></abbr>
              </div>
            );
          })
        }
      </div>
    );
  }
};

export default Technologies;
