import constants from '../constants';
const repoUrl = `https://api.github.com/users/michaelclark2/repos?per_page=100&access_token=${constants.githubToken}`;

function getData (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.error(err);
      });
  });
};

const getRepos = () => {
  return getData(repoUrl);
};

async function findLanguages (repos) {
  const promises = [];
  const urls = repos.map(r => r.url);
  urls.forEach(url => {
    promises.push(getData(url + `/languages?access_token=${constants.githubToken}`));
  });

  const languages = await Promise.all(promises);

  const languageData = [];
  languages.forEach(language => {
    Object.keys(language).forEach(l => {
      if (languageData.some(x => x.language === l)) {
        languageData.find(x => x.language === l).lines += language[l];
      }
      else {
        languageData.push({language: l, lines: language[l]});
      }
    });
  });

  return languageData;

};

export {getRepos, findLanguages};
