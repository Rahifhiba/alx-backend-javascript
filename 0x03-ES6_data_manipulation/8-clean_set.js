export default function cleanSet(set, startString) {
  let final = '';
  if (startString.length !== 0) {
    for (const e of set) {
      if (e.startsWith(startString)) {
        final += `${e.slice(startString.length) || ''}-`;
      }
    }
    if (final.endsWith('-')) {
      final = final.slice(0, -1);
    }
  }
  return final;
}
