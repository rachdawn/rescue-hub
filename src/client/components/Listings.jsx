import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ListingCard from "./ListingCard";
import PropTypes from 'prop-types';

function Listings( {listings} ) {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          background:
            "linear-gradient(109.6deg, rgb(249, 206, 97) 11.2%, rgb(254, 181, 35) 91.1%)",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: "3rem",
          color: "rgb(239, 239, 238)",
          textAlign: "center",
          m: 0,
          my: 2,
          boxShadow:
            "0px 2px 2px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
          fontFamily: "monospace",
          fontWeight: 700,
          px: 4,
        }}
      >
        <h2>Adoptable Dogs</h2>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
          py: 3,
          px: 6,
        }}
      >
        {listings.length > 0 ? ( // Conditional rendering
          listings.map((listing) => (
            <ListingCard key={listing?.id} listing={listing} />
          ))
        ) : (
          <div>No adoptable dogs available.</div> // Placeholder message
        )}
      </Box>
    </Container>
  );
}

Listings.propTypes = {
  listings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      // add other listing properties here if needed
    })
  ),
};

export default Listings;