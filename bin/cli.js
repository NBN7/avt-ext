#!/usr/bin/env node

import { execSync } from "child_process";
import chalk from "chalk";

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(chalk.red(`Failed to execute ${command}`), e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/NBN7/avt-ext ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(
  chalk.blue(`\nCloning extensions template with name: ${repoName}...\n`)
);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(chalk.blue(`\nInstalling dependencies for: ${repoName}...\n`));
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(chalk.green("\nDone! Now run:\n"));
console.log(chalk.yellow(`cd ${repoName}`));
console.log(chalk.yellow(`npm run dev\n`));
