function Header() {
  return <div>Header


    <header>
    <a href="#">
        <img
          className="header-image"
          src="images/CodeSquad-Comics-logo.jpg"
          alt="CodeSquad Comics Logo"
        />
      </a>
      <nav>
        <a href="#" class="hamburger"><i class="fa-solid fa-bars"></i></a>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">LOG IN</a></li>
        </ul>
      </nav>
      </header>
  </div>;
}

export default Header;
