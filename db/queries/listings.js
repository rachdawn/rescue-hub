import db from "../connection.js";

const getListings = (fee) => {
    console.log("fee in getListings:", fee);
  return db
    .query(
      `
  SELECT dogs.*
  FROM dogs
  WHERE dogs.adoption_fee <= $1
  ;`,
      [fee]
    )
    .then((data) => {
      console.log("Listings data being sent:", data.rows); // Check the data!
      return data.rows;
    })
    .catch((error) => {
      console.error("error from listings", error); // Log the error
      throw error; // Re-throw the error for the caller to handle
    });
};

export { getListings };
