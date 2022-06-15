// import components
import { Navbar, About, Footer, Mint, WalletConnect, RoadMap } from './components';

// minting app
const App = () => {
 return (
    <div className="min-h-screen">
     <div className="gradient-bg-walletconnect">
       <Navbar />
       <Mint />
      </div>
      <WalletConnect />
      <About />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App