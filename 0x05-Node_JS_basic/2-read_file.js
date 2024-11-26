#!/usr/bin/node

function countStudents(path){

    const fs = require('fs');
    try {
        const data = fs.readFileSync(path, 'utf8');
        const line = data.split('\n');
        const word = line.map((l) => l.split(','));
        const num_student = word.length - 1;
        console.log(`Number of students: ${num_student}`);
        list_stud_CS = [];
        list_stud_SWE = [];
        count_stud_CS = 0;
        count_stud_SWE = 0;
        for (let i = 1; i <= num_student; i++) {
            if (word[i].includes('CS')){
                list_stud_CS.push(word[i][0]);
                count_stud_CS = count_stud_CS + 1;
            }
            if (word[i].includes('SWE')){
                list_stud_SWE.push(word[i][0]);
                count_stud_SWE = count_stud_SWE + 1;
            }
        }
        console.log(`Number of students in CS: ${count_stud_CS}. List: ${list_stud_CS}`);
        console.log(`Number of students in SWE: ${count_stud_SWE}. List: ${list_stud_SWE}`);
        }
    catch (err) {
      console.error("Cannot load the database");
    }
}

module.exports = countStudents;
