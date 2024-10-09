// 100-await.js
import createUser from './4-user-promise'; // Adjust the path to createUser as well
import uploadPhoto from './5-photo-reject'; // Make sure to adjust the path if needed

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('photo-profile-1'); // Call uploadPhoto
    const userResponse = await createUser('Guillaume', 'Salva'); // Call createUser

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null, // Return null for photo on error
      user: null,  // Return null for user on error
    };
  }
}
