// import components
import { Navbar, About, Footer, Mint, WalletConnect, RoadMap, Transactions } from './components';

// minting app
const App = () => {
 return (
    <div className="min-h-screen">
     <div className="gradient-bg-about">
       <Navbar />
       <About />
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