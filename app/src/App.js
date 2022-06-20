import "./App.css";
import Content from "./components/Content.component";
import Footer from "./components/Footer.component";
import Navbar from "./components/Navbar.component";

function App() {
  return (
    <div className="App">
      <section class="hero is-dark is-fullheight">
        <div class="hero-head">
          <Navbar />
        </div>

        <div class="hero-body">
          <Content />
        </div>

        <div class="hero-foot">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
