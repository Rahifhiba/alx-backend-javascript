export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('TypeError: Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('TypeError: Lenght must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('TypeError: students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(x) {
    this._name = x;
  }

  get name() {
    return this._name;
  }
}
