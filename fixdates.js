const axios = require('axios');
const moment = require('moment');
axios.get('https://michaelclark-112e5.firebaseio.com/blogs.json').then(res => {
  Object.entries(res.data).forEach(entry => {
    entry[1].date = (moment(entry[1].date));
    axios.put('https://michaelclark-112e5.firebaseio.com/blogs/' + entry[0] + '.json', entry[1]);
  });
});
