export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  if (position < 0 || position > int8view.length) {
    throw new Error('Position outside range');
  }
  int8view[position] = value;
  // const dataview = new DataView(buffer);
  // dataview.getInt8(position)

  return int8view;
}
