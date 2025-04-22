import db from '../connection.js';

const findDog = (id) => {
  return db.query(`
    SELECT dogs.*
    FROM dogs
    WHERE id = $1
  ;`, [id])
    .then(data => {
      console.log("data", data)
      return data.rows[0];
    })
    .catch(error => {
      console.log("error from listings", error);
      throw error;
    });
};

export { findDog };
