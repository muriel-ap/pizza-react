const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar-container navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="d-flex justify-content-start align-items-center gap-3">
        <a className="navbar-brand fs-3" href="#home">
          Pizzería Mama Mía
        </a>
        <button className="btn btn-outline-light">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Register</button>
          </>
        )}
      </div>

      <button className="btn btn-outline-info">
        🛒 Total: ${total.toLocaleString()}
      </button>
    </nav>
  );
};

export default Navbar;
