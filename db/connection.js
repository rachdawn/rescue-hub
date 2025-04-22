import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new pg.Pool({
  // eslint-disable-next-line no-undef
  connectionString: process.env.VITE_DATABASE_URL,
  ssl: true,
});

// Test the connection
pool
  .connect()
  .then(async (client) => {
    console.log("Database connected!");
    try {
      const result = await client.query(`SELECT dogs.*
  FROM dogs WHERE id=2`); // Test query
      console.log("Test query result:", result.rows); // Log the result
      client.release(); // Release the client back to the pool
    } catch (err) {
      console.error("Error with test query:", err);
      client.release(); // Release the client back to the pool even if the test query fails
    }
  })
  .catch((err) => {
    console.error("Oh no! There was an error connecting to PostgreSQL:", err);
    throw err;
  });

export default pool;
