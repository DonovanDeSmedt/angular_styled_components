const packageJSON = require('../package.json');
const exec = require('child-process-promise').exec;
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const basePath = path.join(__dirname, '..');
const distPath = path.join(basePath, 'dist');

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

infoLog(`Building the package: ${packageJSON.name}`);
runCommand('npm run build')
  .then(() => {
    infoLog(
      `Publishing package ${packageJSON.name} version ${packageJSON.version}`
    );
    return runCommand(`cd ${distPath} && npm publish`);
  })
  .then(() => {
    infoLog(`Package ${packageJSON.name} successfully published`);
  })
  .catch(err => {
    errorLog(err.message);
  });
