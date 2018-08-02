import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component {
  render () {
    const {project, isSelected} = this.props;
    return (
      <div className={isSelected ? 'ProjectCard column is-8 is-offset-2 selected' : 'ProjectCard column is-half'}>
        <div className="card">
          <div className="card-image">
            <figure className={isSelected ? 'image is-16by9' : 'image is-square'}>
              <img src={project.thumbnail} alt=""/>
            </figure>
          </div>
          <div className="card-header">
            <h1 className="card-header-title is-size-4">{project.title}</h1>
          </div>
          <div className="card-content">
            <p>{project.description}</p>
            {
              isSelected ? (
                <div>
                  <p className="title is-4">Technologies Used:</p>
                  <p className="subtitle is-6 is-italic">{project.technologiesUsed}</p>
                </div>
              ) : (
                null
              )
            }
          </div>
          <div className="card-footer">
            <a className="card-footer-item" href={project.url}>View Project</a>
            <a className="card-footer-item" href={project.github}>View on GitHub</a>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectCard;
