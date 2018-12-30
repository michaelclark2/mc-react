import axios from 'axios';
import constants from '../constants';

const getProjects = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/projects.json`)
      .then(res => {
        const data = res.data;
        const projects = [];
        if (data !== null) {
          Object.keys(data).forEach(key => {
            data[key].id = key;
            projects.push(data[key]);
          });
        }
        resolve(projects);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getProjects};
