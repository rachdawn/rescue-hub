import "./App.css";
import TopNav from "./components/TopNav";
import Container from "@mui/material/Container";
import Hero from "./components/Hero";
import Listings from "./components/Listings";

function App() {
  return (
    <>
      <Container
        sx={{
            minHeight: '100vh',
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/arches.png)",
          backgroundSize: "fit",
          backgroundColor: "rgb(239, 239, 238)",
        }}
        maxWidth="xl"
        disableGutters
      >
        <TopNav />
        <Hero />
        <Listings />
      </Container>
    </>
  );
}

export default App;
