import constants from '../constants';

export default function sendEmail (msg) {
  return fetch(constants.backendUrl + '/email', { method: 'POST', body: JSON.stringify(msg)});
};
