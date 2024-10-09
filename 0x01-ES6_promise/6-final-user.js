// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = [];

  // Create an array of promises
  const promises = [
    signUpUser(firstName, lastName)
      .then(value => ({ status: 'fulfilled', value }))
      .catch(error => ({ status: 'rejected', value: error })),
    
    uploadPhoto(fileName)
      .then(value => ({ status: 'fulfilled', value }))
      .catch(error => ({ status: 'rejected', value: error })),
  ];

  // Wait for all promises to settle
  const settledResults = await Promise.allSettled(promises);
  
  // Push results to the array
  settledResults.forEach(result => results.push(result));

  return results;
}
