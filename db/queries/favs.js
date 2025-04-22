import db from '../connection.js';

const getFavs = (user) => {
  return db.query(`
  SELECT favourites.*, dogs.name, dogs.breed, dogs.adoptable, dogs.photo_url, dogs.adoption_fee
  FROM favourites
  JOIN dogs ON dog_id = dogs.id
  WHERE favourites.liked = TRUE
  AND favourites.user_id = $1
  ;`, [user])
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.log("error from listings", error)
    });
};

export { getFavs };
