#!/usr/bin/node
console.log("Welcome to Holberton School, what is your name?");
process.stdin.on('readable', function() {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('Your name is: ' + chunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing');
});
