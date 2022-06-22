import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Content from "./components/Content.component";
import Navbar from "./components/Navbar.component";
import { WalletContextProvider } from "./context/Wallet.context";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <WalletContextProvider>
      <div className="App">
        <ToastContainer />
        <section className="hero is-dark is-fullheight">
          <div className="hero-head">
            <Navbar />
          </div>
          <div className="hero-body">
            <Content />
          </div>
        </section>
      </div>
    </WalletContextProvider>
  );
}

export default App;
