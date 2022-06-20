export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              src="https://www.theia.finance/static/media/logo.70226144649d1a7c571327223765b4d1.svg"
              alt="Logo"
            />
          </a>
          <span className="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">Home</a>
            <a className="navbar-item">Examples</a>
            <a className="navbar-item">Documentation</a>
            <span className="navbar-item">
              <a className="button is-primary">
                Connect
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
