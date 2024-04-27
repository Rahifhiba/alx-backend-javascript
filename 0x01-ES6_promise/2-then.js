export default function handleResponseFromAPI(promise) {
  return promise
    .then((res) => ({ status: 200, body: res }))
    .catch((err) => (new Error(err)))
    .finally(console.log('Got a response from the API'));
}
