import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([signUpUser]) => {
      return [
      { status: 'fulfilled', value: { firstName: signUpUser.firstName, lastName: signUpUser.lastName } },

      ];
    })
    .catch(() => {
      return [{ status: 'rejected' }];
    });
  }
