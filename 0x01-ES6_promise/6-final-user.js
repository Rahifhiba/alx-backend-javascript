import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto()])
    .then(([signUpUser]) => {
      console.log([{ status: 'fulfilled', values: { firstName: `${signUpUser.firstName}`, lastName: `${signUpUser.lastName}` } }]);
    })
    .catch(console.log({ status: 'rejected', values: uploadPhoto(fileName) }));
}
