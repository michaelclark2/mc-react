import React from 'react';
import Slider from 'react-slick';
import './Projects.scss';

import ProjectCard from '../ProjectCard/ProjectCard';
import {getProjects} from '../../helpers/api';

class Projects extends React.Component {
  state = {
    projects: []
  }
  componentDidMount () {
    getProjects()
      .then(projects => {
        this.setState({projects});
      })
      .catch(err => {
        console.error('Error getting projects', err);
      });
  }
  render () {
    const {projects} = this.state;
    const projectCards = projects.map(p => {
      return (
        <ProjectCard
          key={p.id}
          project={p}
        />
      );
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      className: 'container is-fluid',
      adaptiveHeight: true
    };
    return (
      <div className="Projects section">
        <Slider {...settings}>
          {projectCards}
        </Slider>
      </div>
    );
  }
};

export default Projects;
