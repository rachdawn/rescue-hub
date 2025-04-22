import { useState, useEffect, useCallback } from "react";
import Hero from "./Hero";
import Listings from "./Listings";
import Container from "@mui/material/Container";

function Home() {
  const [listings, setListings] = useState([]);
  const [dog, setDog] = useState(null);
  const [error, setError] = useState(null);

  const fetchListings = useCallback(async () => {
    try {
      const response = await fetch("/api/main/listings");
      if (!response.ok) {
        throw new Error("Failed to fetch listings");
      }
      const data = await response.json();
      setListings(data.listings);
    } catch (err) {
      console.error("Error fetching listings:", err);
      setError(err);
      console.log("Listings after error:", listings);
    }
  }, [listings]);

  const fetchDog = useCallback(async () => {
    try {
      const response = await fetch("/api/main/dogOfDay");
      if (!response.ok) {
        throw new Error("Failed to fetch dog of the day");
      }
      const data = await response.json();
      setDog(data);
    } catch (err) {
      console.error("Error fetching dog of the day:", err);
      setError(err);
      console.log("Dog after error:", dog);
    }
  }, [dog]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]); // Add the memoized function as a dependency

  useEffect(() => {
    fetchDog();
  }, [fetchDog]); // Add the memoized function as a dependency

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://www.transparenttextures.com/patterns/arches.png)",
        backgroundSize: "fit",
        backgroundColor: "rgb(239, 239, 238)",
      }}
      maxWidth="xl"
      disableGutters
    >
      <Hero dog={dog} />
      <Listings listings={listings} />
    </Container>
  );
}

export default Home;

// function Home() {
// //   const [error, setError] = useState(null);
//   const [dog, setDog] = useState(null);


//   useEffect(() => {
//     const fetchDog = async () => {
//       try {
//         const response = await fetch("/api/dogOfDay");
//         if (!response.ok) {
//           throw new Error("Failed to fetch dog of the day");
//         }
//         const data = await response.json();
//         setDog(data);
//       } catch (err) {
//         console.error("Error fetching dog of the day:", err);
//         // setError(err);
//         console.log("Dog after error:", dog);
//       }
//     };

//     fetchDog();
//   }, []);

//   return (
    
//     <Container
//       sx={{
//         minHeight: "100vh",
//         backgroundImage:
//           "url(https://www.transparenttextures.com/patterns/arches.png)",
//         backgroundSize: "fit",
//         backgroundColor: "rgb(239, 239, 238)",
//       }}
//       maxWidth="xl"
//       disableGutters
//     >
//       <Hero dog={dog} />
//       <Listings listings={listings} />
//     </Container>
//   ); // Simple rendering
// }

// export default Home;
