export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">Home</a>
            <a class="navbar-item">Examples</a>
            <a class="navbar-item">Documentation</a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                Connect
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
