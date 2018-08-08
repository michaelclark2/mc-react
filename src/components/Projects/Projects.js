import React from 'react';
import './Projects.css';

import ProjectCard from '../ProjectCard/ProjectCard';

import projectReqs from '../../firebase/projects';

class Projects extends React.Component {
  state = {
    projects: [],
    selectedProjectId: '',
  }
  componentDidMount () {
    projectReqs
      .getProjects()
      .then(projects => {
        this.setState({projects});
      })
      .catch(err => {
        console.error('Error getting projects', err);
      });
  }
  selectProject = (e) => {
    const selectedProjectId = e.target.id;
    if (selectedProjectId === this.state.selectedProjectId) {
      this.setState({selectedProjectId: ''});
    } else {
      this.setState({selectedProjectId});
    }
    document.getElementById('project-container').scrollTop = 0;
  }
  render () {
    const {projects, selectedProjectId} = this.state;
    const projectCards = projects.map(p => {
      return (
        <ProjectCard
          key={p.id}
          project={p}
          isSelected={selectedProjectId === p.id}
        />
      );
    }).sort((a, b) => {
      if (b.props.isSelected) {
        return 1;
      }
      return 0;
    });
    const projectTitles = projects.map(p => {
      return (
        <li key={p.id}>
          <a
            id={p.id}
            onClick={this.selectProject}
            className={selectedProjectId === p.id ? 'is-active' : ''}
          >
            {p.title}
          </a>
        </li>
      );
    });
    return (
      <div className="Projects columns">
        <aside className="column is-3">
          <h1 className="title">Projects</h1>
          <div className="menu">
            <ul className="menu-list">
              {projectTitles}
            </ul>
          </div>
        </aside>
        <main className="column" id="project-container">
          <div className="columns is-multiline">
            {projectCards}
          </div>
        </main>
      </div>
    );
  }
};

export default Projects;
