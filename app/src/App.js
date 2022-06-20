import "./App.css";
import Content from "./components/Content.component";
import Footer from "./components/Footer.component";
import Navbar from "./components/Navbar.component";

function App() {
  return (
    <div className="App">
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
          <Content />
        </div>

        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
