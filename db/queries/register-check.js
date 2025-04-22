import db from '../connection.js';

const getUserByEmail = (email) => {
  return db.query(`
   SELECT * FROM users
   WHERE users.email = $1 
  ;`, [email])
    .then(data => {
      return data.rows[0];
    })
    .catch(error => {
      console.log(error)
    });
};

export { getUserByEmail };
