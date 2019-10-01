import constants from '../constants';

export const sendEmail = async (msg) => {
  return fetch(constants.backendUrl + '/email', { method: 'POST', body: JSON.stringify(msg)});
};

export const getProjects = async () => {
  return fetch(constants.backendUrl + '/projects').then(res => res.json());
};

export const getCode = async () => {
  return fetch(constants.backendUrl + '/code').then(res => res.json());
};
