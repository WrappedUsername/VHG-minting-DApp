// import components
import {
  Navbar,
  About,
  Footer,
  Mint,
  WalletConnect,
  RoadMap,
} from "./components";

// minting app
const App = () => {
  return (
    <div>
      <Navbar />
      <Mint />
      <WalletConnect />
      <About />
      <RoadMap />
      <Footer />
    </div>
  );
};

export default App;
