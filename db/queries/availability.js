import db from '../connection.js';

const adoptability = (id) => {
  return db.query(`
    UPDATE dogs
    SET adoptable = FALSE
    WHERE id = $1;
  `, [id])
  .catch(error => {
    throw error;
  });
};

export { adoptability };