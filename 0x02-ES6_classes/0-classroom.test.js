import  ClassRoom from './0-classroom';

test('tasks are correctly defined', () => {
  expect(`${taskFirst()} ${taskNext()}`).toEqual("I prefer const when I can. But sometimes let is okay");
});