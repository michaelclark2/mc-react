import constants from '../constants';

export default function getBlogs () {
  return fetch(constants.backendUrl + '/blogs').then(res => res.json());
};
