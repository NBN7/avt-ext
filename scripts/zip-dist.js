import fs from 'fs';
import archiver from 'archiver';
import chalk from 'chalk';

const output = fs.createWriteStream('dist.zip');
const archive = archiver('zip', {
  zlib: { level: 9 },
});

output.on('close', () => {
  console.log(
    chalk.blue(
      `Auravant Extension .zip file created successfully: ${archive.pointer()} bytes\n`
    )
  );
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory('dist/', false);
archive.finalize();
