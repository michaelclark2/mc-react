import axios from 'axios';
import constants from '../constants';
import moment from 'moment';

const getBlogs = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${constants.firebaseConfig.databaseURL}/blogs.json`)
      .then(blogs => {
        blogs = blogs.data;
        const blogArray = [];
        Object.keys(blogs).forEach(key => {
          blogs[key].id = key;
          blogArray.push(blogs[key]);
        });
        blogArray.sort((a, b) => {
          a = moment(a.date);
          b = moment(b.date);
          if (a.isBefore(b)) {
            return 1;
          } else if (b.isBefore(a)) {
            return -1;
          } else {
            return 0;
          }
        });
        resolve(blogArray);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export {getBlogs};
