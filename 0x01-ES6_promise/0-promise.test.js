import { getResponseFromAPI } from './0-promise.js';

test('tasks are correctly defined', () => {
  expect(`${getResponseFromAPI()}`).toEqual(true);
});