import db from '../connection.js';

const getDog = (id) => {
  return db.query(`
  SELECT dogs_id
  FROM dogs
  WHERE dogs_id = $1
  ;`, [id])
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.log("error from listings", error)
    });
};

export { getDog };
