export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const s = true;
      if (s) {
        resolve(true);
      } else {
        reject(new Error(false));
      }
    });
  });
}
