import "./App.css";
import TopNav from "./components/TopNav";
import Container from "@mui/material/Container";
import Hero from "./components/Hero";
import Listings from "./components/Listings";

function App() {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <TopNav />
        <Hero />
        <Listings />
      </Container>
    </>
  );
}

export default App;
