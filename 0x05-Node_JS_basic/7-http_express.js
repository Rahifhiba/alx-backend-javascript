#!/usr/bin/node
const express = require('express');
const fs = require('fs').promises;

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
    return('Cannot load the database');
  }
}
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  const data = await countStudents(process.argv[2]);
  res.send(`This is the list of our students\n${data}`);
});
app.listen(1245);

module.exports = app;
