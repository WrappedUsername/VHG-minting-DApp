// import components
import { Navbar, About, Footer, Mint, WalletConnect, RoadMap, Transactions } from './components';

// minting app
const App = () => {
 return (
    <div className="min-h-screen">
     <div className="gradient-bg-walletconnect">
       <Navbar />
       <WalletConnect />
      </div>
      <Mint />
      <About />
      <RoadMap />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App