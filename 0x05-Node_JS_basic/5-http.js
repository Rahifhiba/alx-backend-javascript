#!/usr/bin/node
const { createServer } = require('http');
const fs = require('fs').promises;

const hostname = 'localhost';
const port = 1245;
const path = process.argv[2];
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const line = data.split('\n').filter((l) => l.trim() !== '');
    const word = line.map((l) => l.split(','));
    const NumStudent = word.length - 1;
    let output = '';
    output += `Number of students: ${NumStudent}\n`;
    const ListStudCS = [];
    const ListStudSWE = [];
    let CountStudCS = 0;
    let CountStudSWE = 0;
    for (let i = 1; i <= NumStudent; i += 1) {
      if (word[i].includes('CS')) {
        ListStudCS.push(word[i][0]);
        CountStudCS += 1;
      }
      if (word[i].includes('SWE')) {
        ListStudSWE.push(word[i][0]);
        CountStudSWE += 1;
      }
    }

    output += `Number of students in CS: ${CountStudCS}. List: ${ListStudCS.join(', ')}\n`;
    output += `Number of students in SWE: ${CountStudSWE}. List: ${ListStudSWE.join(', ')}`;
    return output;
  } catch (error) {
    console.log('Cannot load the database');
    return Promise.reject(error);
  }
}
const app = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    try {
      res.writeHead(200);
      const data = await countStudents(path);
      res.end(`This is the list of our students\n${data}`);
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  }
});

app.listen(port, hostname);
module.exports = app;
