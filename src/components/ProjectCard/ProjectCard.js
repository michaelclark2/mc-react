import React from 'react';
import './ProjectCard.scss';

class ProjectCard extends React.Component {
  render () {
    const {project} = this.props;
    return (
      <div className='ProjectCard'>

        <div className="columns">
          <div className="column is-half">
            <figure className='image is-16by9'>
              <img src={project.thumbnail} alt=""/>
            </figure>
          </div>
          <div className="column is-half">
            <div className="project card">
              <div className="card-header">
                <h1 className="card-header-title is-size-4">{project.title}</h1>
              </div>
              <div className="card-content">
                <p>{project.desc}</p>
                <div className="techs-used">
                  <p className="title is-4">Technologies Used:</p>
                  <p className="subtitle is-6 is-italic">{project.techs}</p>
                </div>
              </div>
              <div className="card-footer">
                <a className="card-footer-item" href={project.url}>View Project</a>
                <a className="card-footer-item" href={project.github}>View on GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
};

export default ProjectCard;
