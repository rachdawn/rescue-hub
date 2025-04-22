import db from '../connection.js';

const deleteFavorite = (userId, dogId) => {
  console.log('Deleting favourite with dog_id:', dogId);

  return db.query(`
    DELETE FROM favourites
    WHERE user_id = $1 AND dog_id = $2;
  `, [userId, dogId])
  .catch(error => {
    console.log("Error from deleteFavorite:", error);
    throw error;
  });
};

export { deleteFavorite };