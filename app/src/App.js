import "./App.css";
import Footer from "./components/Footer.component";
import Navbar from "./components/Navbar.component";

function App() {
  return (
    <div className="App">
      <section class="hero is-primary is-fullheight">
        <div class="hero-head">
          <Navbar />
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Coding Challenge FE</p>
            <p class="subtitle">João Oliveira</p>
          </div>
        </div>

        <div class="hero-foot">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
