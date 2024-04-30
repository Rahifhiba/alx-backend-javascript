export default function setFromArray(arr) {
  const unique = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    if (!unique.has(arr[i])) {
      unique.add(arr[i]);
    }
  }
  return unique;
}
