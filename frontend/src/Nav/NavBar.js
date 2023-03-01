// import "bootstrap/dist/css/bootstrap.min.css";
const NavBar = () => {
    return (
        <>
        <nav id="nav" class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <a class="nav-link" href="/hello">Create Account</a>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link " href="/login">Login</a>
      </li>  */}
    </ul>
  </div>
</nav>
        </>
    );
}

export default NavBar;