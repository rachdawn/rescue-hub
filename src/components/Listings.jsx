import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ListingCard from "./ListingCard";

function Listings() {
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
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
        </Box>
    </Container>
  );
}

export default Listings;
