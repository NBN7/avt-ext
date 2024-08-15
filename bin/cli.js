#!/usr/bin/env node

import { execSync } from 'child_process';
import chalk from 'chalk';
import readline from 'readline';
import fs from 'fs';
import path from 'path';

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(chalk.redBright(`Failed to execute ${command}`), e);
    return false;
  }
  return true;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askForRepoName = () => {
  return new Promise((resolve) => {
    rl.question('Please enter a name for your project: ', (name) => {
      resolve(name.trim());
    });
  });
};

const removeGitDirectory = (repoPath) => {
  const gitDir = path.join(repoPath, '.git');
  if (fs.existsSync(gitDir)) {
    fs.rmSync(gitDir, { recursive: true, force: true });
    console.log(chalk.greenBright('Removed .git directory.\n'));
  } else {
    console.log(chalk.yellowBright('.git directory not found.\n'));
  }
};

const main = async () => {
  let repoName = process.argv[2];

  if (!repoName || repoName.trim() === '') {
    console.log(
      chalk.yellowBright('\nNo project name provided or name is empty.\n')
    );
    do {
      repoName = await askForRepoName();
    } while (repoName === '');
  }

  const gitCheckoutCommand = `git clone --depth 1 https://github.com/NBN7/avt-ext ${repoName}`;
  const installDepsCommand = `cd ${repoName} && npm install`;

  console.log(
    chalk.blueBright(
      `\nCloning extensions template with name: ${repoName}...\n`
    )
  );
  const checkedOut = runCommand(gitCheckoutCommand);
  if (!checkedOut) process.exit(-1);

  // Remove .git directory to detach from the original repository
  removeGitDirectory(repoName);

  console.log(
    chalk.blueBright(`\nInstalling dependencies for: ${repoName}...\n`)
  );
  const installedDeps = runCommand(installDepsCommand);
  if (!installedDeps) process.exit(-1);

  console.log(chalk.greenBright('\nDone! Now run:\n'));
  console.log(chalk.yellowBright(`cd ${repoName}`));
  console.log(chalk.yellowBright(`npm run dev\n`));

  rl.close();
};

main();
