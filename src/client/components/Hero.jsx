import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpotlightCard from "./SpotlightCard";
import PropTypes from 'prop-types';

function Hero( {dog} ) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        textAlign: "center",
        p: 4,
        m: 0,
        mt: 4,
      }}
    >
      <Typography variant="body1" width={"50dvw"} px={10} gutterBottom>
        Happy Tails Rescue Hub was created for the purpose of streamlining the
        process of connecting adoptable dogs with their fur-ever families. As
        avid dog lovers and supporters of the rescue community, our aim is to
        increase exposure for local rescues by providing a convenient central
        hub for those who are looking to adopt a furry friend. 🐾{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "60dvw",
          pt: 7,
          pb: 4,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Adoption Spotlight
        </Typography>
        <SpotlightCard dog={dog} />
      </Box>
    </Box>
  );
}

Hero.propTypes = {
  dog: PropTypes.object, // Make dog prop optional
};

export default Hero;