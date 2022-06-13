// import components
import { Navbar, WalletConnect, Mint, RoadMap, Transactions, Footer } from './components';

// minting app
const App = () => {
 return (
    <div className="min-h-screen">
     <div className="gradient-bg">
       <Navbar />
       <WalletConnect />
      </div>
      <Mint />
      <RoadMap />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App