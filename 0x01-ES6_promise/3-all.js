// 3-all.js
import createUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup() {
  try {
    // Call both functions and wait for their promises to resolve
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto('photo-profile-1'),
      createUser('Guillaume', 'Salva'),
    ]);

    // Log the required values
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    // Log the error message if any promise fails
    console.log('Signup system offline');
  }
}
