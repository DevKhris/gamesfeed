import GamerFeed from "./../assets/images/GamerFeed.png";

function NavBar(props) {
  return (
    <div className="relative top-0 left-0 z-40 w-full pb-1 pl-1">
      <div className="container md:mx-auto relative">
        <div className="row">
          <div className="w-full">
            <nav className="flex items-center justify-between z-20 bg-white dark:bg-slate-900 py-2.5">
              <a className="mr-4 navbar-brand flex items-center" href="/">
                <img
                  className="pt-1"
                  src={GamerFeed}
                  alt="GamerFeed"
                  width={64}
                />
                <span className="ml-1 font-semibold text-slate-900 whitespace-nowrap dark:text-white transition-colors x-8 hover:text-purple-500">
                  GamerFeed
                </span>
              </a>

              <div className="flex items-center">
                <ul className="items-center content-end">
                  <li>
                    <a
                      className="font-semibold transition-colors x-8 dark:text-white hover:text-purple-500"
                      href="/"
                      title="Home"
                    >
                      <span className="mr-10">Home</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
