import GamerFeed from "./../assets/images/GamerFeed.png";

function NavBar() {
  return (
    <>
      <header>
        <nav className="">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a className="flex items-center" href="/">
              <img
                className="ml-4"
                src={GamerFeed}
                alt="GamerFeed"
                width={64}
              />
              <span className="font-bold text-white">GamerFeed</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
