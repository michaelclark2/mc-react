import constants from '../constants';

export default function getProjects () {
  return fetch(constants.backendUrl + '/projects').then(res => res.json());
};
