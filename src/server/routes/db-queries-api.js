import { Router } from "express";
const router = Router();
console.log("dbQueriesAPI router created");

import dotenv from "dotenv";
dotenv.config(); // Keep this for local development

import { neon } from "@neondatabase/serverless";

// eslint-disable-next-line
const dbConnection = process.env.VITE_DATABASE_URL;

// Check if the connection string is defined
if (!dbConnection) {
  console.error("Database connection string is not defined.");
  throw new Error("Database connection string is not defined.");
}
console.log("Database connection string defined :) "); // Log the connection string for debugging

// Initialize the Neon SQL client with the connection string
const sql = neon(dbConnection);

// Check if the SQL client is initialized
if (!sql) {
  console.error("Failed to initialize Neon SQL client.");
  throw new Error("Failed to initialize Neon SQL client.");
}
console.log("Neon SQL client initialized successfully.");

// Function to fetch listings using Neon's serverless SQL
async function getListingsFromDb() {
  try {
    const result = await sql`
    SELECT dogs.*
    FROM dogs
    ;`;
    console.log("Listings data being sent:", result); // Check the data!
    return result;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error;
  }
}

// Function to fetch dog of the day using Neon's serverless SQL
async function getDogOfDayFromDb() {
  try {
    const result = await sql`
  WITH DOGGY AS (
    SELECT *
    FROM dogs
    WHERE name IS NOT NULL AND adoptable = true
    ORDER BY random()
    LIMIT 1
  )
  SELECT *
  FROM DOGGY
  WHERE EXISTS (
  SELECT 1
  FROM dogs
  WHERE dogs.id = DOGGY.id
  )
  ;`;
    return result;
  } catch (error) {
    console.error("Error fetching dog of the day:", error);
    throw error;
  }
}

router.get("/test", (req, res) => {
  res.json({ message: "Hello from test API in dbQueriesAPI!" });
    console.log("Test API route hit");
});

router.get("/listings", async (req, res) => {
  try {
    const listings = await getListingsFromDb();
    console.log("Listings data being sent:", listings);
    res.json({ listings }); // Adjust the response structure as needed
  } catch (error) {
    console.error("Error in /listings route:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/dogOfDay", async (req, res) => {
  try {
    const dog = await getDogOfDayFromDb();
    console.log("Dog data being sent:", dog);
    res.json(dog);
  } catch (error) {
    console.error("Error in /dogOfDay:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

// import { Router } from "express";
// const router = Router();
// console.log("dbQueriesAPI router created");

// import db from "../../../db/connection.js";

// import { getListings } from "../../../db/queries/listings.js";
// import { dogOfDay } from "../../../db/queries/dogOfDay.js";

// router.get("/test", (req, res) => {
//   res.json({ message: "Hello from test API in dbQueriesAPI!" });
// });

// router.get("/listings", async (req, res) => {
//   try {
//     const listings = await getListings(500, db);
//     console.log("Listings data being sent:", listings);
//     res.json({ message: "Hello from listings API!", listings });
//   } catch (error) {
//     console.error("Error in /listings route:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/dogOfDay", async (req, res) => {
//   try {
//     const dog = await dogOfDay(db);
//     console.log("Dog data being sent:", dog);
//     res.json(dog);
//   } catch (error) {
//     console.error("Error in /dogOfDay:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;

// import { addUser } from "../../../db/queries/register.js";
// import { getUserByEmail } from "../../../db/queries/register-check.js";
// import { getFavs } from "../../../db/queries/favs.js";
// import { insertFav } from "../../../db/queries/favouriteListing.js";
// import { addListing } from "../../../db/queries/createListing.js";
// import { getMyListings } from "../../../db/queries/getMyListings.js";
// import { findDog } from "../../../db/queries/findDog.js";
// import { deleteListing } from "../../../db/queries/deleteListing.js";
// import { adoptability } from "../../../db/queries/availability.js";
// import { deleteFavorite } from "../../../db/queries/deleteFavorite.js";

// router.get("/", async (req, res) => {
//   try {
//     const listings = await listingsQueries.getListings(500, db);
//     const dog = await dogOfDay(db);
//     const template = { listings, dog };
//     res.render("index", template);
//   } catch (error) {
//     console.error("Error in / route:", error);
//     res.status(500).send("An error occurred while fetching data.");
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const { number } = req.body;
//     const listings = await listingsQueries.getListings(number, db);
//     const dog = await dogOfDay(db);
//     const template = { listings, dog };
//     res.render("index", template);
//   } catch (error) {
//     console.error("Error in POST / route:", error);
//     res.status(500).send("An error occurred while fetching data.");
//   }
// });

// router.get("/login", (req, res) => {
//   const userId = req.session.user_id;
//   if (userId) {
//     return res.redirect("/");
//   }
//   res.render("login");
// });

// router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   return getUserByEmail(email)
//     .then((user) => {
//       if (user.password === password) {
//         req.session.user = user;
//         return res.redirect("/");
//       }
//       return res.status(401).send("wrong password");
//     })
//     .catch((error) => {
//       console.error("Login error:", error);
//       res.status(500).send("An error occured while logging in.");
//     });
// });

// router.post("/logout", (req, res) => {
//   req.session = null;
//   res.redirect("/login");
// });

// router.get("/register", (req, res) => {
//   const userId = req.session.user_id;
//   if (userId) {
//     res.redirect("/");
//   } else {
//     res.render("register");
//   }
// });

// router.post("/register", (req, res) => {
//   const { username, email, password, rescuer } = req.body;

//   if (!username || !email || !password) {
//     return res.status(400).send("inputs not valid");
//   }

//   return getUserByEmail(email).then((user) => {
//     if (user?.email) {
//       return res.status(400).send("This email is already registered");
//     }
//     return addUser(username, email, password, Boolean(rescuer))
//       .then((user) => {
//         return res.redirect("/login");
//       })
//       .catch((err) => {
//         console.log("error", err);
//         return res.status(500).send("Please try again");
//       });
//   });
// });

// router.post("/favourites", (req, res) => {
//   const { id } = req.session.user;
//   insertFav(id, req.body.dog_id).then(() => {
//     return; // No need to return anything here
//   });
//   res.redirect("/favourites"); // Redirect after adding to favorites. Important!
// });

// router.get("/create_listing", (req, res) => {
//   res.render("create_listing");
// });

// router.get("/favourites", (req, res) => {
//   const userId = req.session.user.id;

//   getFavs(userId)
//     .then((listings) => {
//       const template = { listings };
//       res.render("favourites", template);
//     })
//     .catch((err) => {
//       console.log("coming here");
//       res.status(500).json({ error: err.message });
//     });
// });

// router.post("/delete-favorite/:id", (req, res) => {
//   const userId = req.session.user.id;
//   const { id } = req.params;

//   deleteFavorite(userId, id)
//     .then(() => {
//       res.redirect("/favourites");
//     })
//     .catch((error) => {
//       console.log("Error deleting favorite:", error);
//       res.status(500).send("Error deleting favorite");
//     });
// });

// router.post("/create_listing", (req, res) => {
//   const { id } = req.session.user;
//   const { name, age, breed, adoption_fee, description, photo_url } = req.body;

//   addListing(id, name, age, breed, adoption_fee, description, photo_url)
//     .then((newListing) => {
//       res.redirect("/my_listings");
//     })
//     .catch((err) => {
//       console.log("error", err);
//       return res.status(500).send(`Did not complete listing: ${err.message}`);
//     });
// });

// router.get("/listing_id", (req, res) => {
//   res.render("listing_id");
// });

// router.get("/my_listings", (req, res) => {
//   const { id } = req.session.user;

//   getMyListings(id)
//     .then((listings) => {
//       res.render("my_listings", { listings });
//     })
//     .catch((err) => {
//       console.log(`error with your listings: ${err.message}`);
//       res.status(400).send("couldnt find your listings");
//     });
// });

// router.get("/listing/:id", (req, res) => {
//   const { id } = req.params;

//   findDog(id)
//     .then((listings) => {
//       res.render("listing_id", { listings });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(404).send("Dog not found");
//     });
// });

// router.post("/delete-listing/:id", (req, res) => {
//   const { id } = req.params; // Use req.params for route parameters

//   deleteListing(id)
//     .then(() => {
//       res.redirect("/my_listings");
//     })
//     .catch((error) => {
//       console.log("Error deleting dog:", error);
//       res.status(500).send("Error deleting dog");
//     });
// });

// router.post("/mark-as-taken/:id", (req, res) => {
//   const { id } = req.params; // Use req.params

//   adoptability(id)
//     .then(() => {
//       res.redirect("/my_listings");
//     })
//     .catch((error) => {
//       console.log(`error with marking dog: ${error.message}`);
//       res.status(500).send("Error marking as taken"); // Add error handling
//     });
// });
