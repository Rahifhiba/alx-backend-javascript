#!/usr/bin/node
const countStudents = require('./3-read_file_async');

// countStudents("nope.csv")
//     .then(() => {
//         console.log("Done!");
//     })
//         .catch((error) => {
//         console.log(error);
//     });
countStudents("database.csv")
.then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
