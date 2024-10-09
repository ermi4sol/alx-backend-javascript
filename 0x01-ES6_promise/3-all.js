// 3-all.js
import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  const uploadPromise = uploadPhoto();
  const createUserPromise = createUser();

  Promise.all([uploadPromise, createUserPromise])
    .then((responses) => {
      const [uploadResponse, userResponse] = responses;
      console.log(`${uploadResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
