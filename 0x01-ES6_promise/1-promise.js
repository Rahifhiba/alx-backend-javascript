export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const s = true;
          if (s) {
            resolve(({status: true, body: 'Success'}));
          } else {
            reject(({status: false, body: 'The fake API is not working currently'}));
          }
        });
      });
}