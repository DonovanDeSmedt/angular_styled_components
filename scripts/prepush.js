const fs = require('fs-extra');
const path = require('path');
const exec = require('child-process-promise').exec;
const basePath = path.join(__dirname, '..');
const basePath2 = path.join(__dirname, '../..');
const rootPath = path.join(__dirname, '../../..');
const chalk = require('chalk');

const runCommand = (cmd, logResult) => {
  return exec(cmd, { maxBuffer: 10000 * 1024 })
    .then(res => {
      if (logResult) {
        infoLog(res.stdout);
      }
    })
    .catch(err => {
      errorLog(err.message);
      return Promise.reject(err);
    });
};

const infoLog = msg => console.log(chalk.green.bold(msg));
const errorLog = msg => console.error(chalk.red.bold(msg));

const bumpVersion = (version, type) => {
  const versions = version.split('.');
  const major = parseInt(versions[0]);
  const minor = parseInt(versions[1]);
  const patch = parseInt(versions[2]);
  switch (type) {
    case 'patch': {
      return `${major}.${minor}.${patch + 1}`;
    }
    case 'minor': {
      return `${major}.${minor + 1}.${patch}`;
    }
    case 'major': {
      return `${major + 1}.${minor}.${patch}`;
    }
  }
};

const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(`${path}/package.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(JSON.parse(data));
    });
  });

const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(`${path}/package.json`, data, 'utf8', err => {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    });
  });

readFile(basePath)
  .then(obj => {
    let { version } = obj;
    const updatedVersion = bumpVersion(version, 'patch');
    const updatedObj = Object.assign(obj, { version: updatedVersion });
    return writeFile(basePath, JSON.stringify(updatedObj, null, 4));
  })
  .then(() => {
    infoLog('commit updated version');
    return runCommand(
      `cd ${rootPath} && git add . && git commit --amend -m "update version number"`
    );
  })
  .catch(err => errorLog(err.message));
