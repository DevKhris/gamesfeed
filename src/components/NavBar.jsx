import GamerFeed from "./../assets/images/GamerFeed.png";

function NavBar() {
  return (
    <>
      <nav className="fixed z-20 w-full bg-white dark:bg-slate-900 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a className="flex items-center md:order-1" href="/">
            <img className="" src={GamerFeed} alt="GamerFeed" width={64} />
            <span className="ml-3 font-semibold text-slate-900 whitespace-nowrap dark:text-white ">
              GamerFeed
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <input
              placeholder="Search news"
              className="p-2 transition-all border-none rounded hover:border-2 hover:border-solid text-slate-800 dark:text-white dark:bg-slate-800 dark:hover:border-blue-700 "
            ></input>
            <input
              className="p-2 mx-2 transition-all rounded text-slate-800 dark:bg-slate-80 dark:hover:bg-blue-700 dark:text-white hover:cursor-pointer"
              type="button"
              value="Search"
            ></input>
          </div>
          <div className="flex items-center md:order-3">
            <a className="items-center flex-1" href="/">
              <span className="px-8 py-8 m-auto font-semibold transition-colors x-8 dark:md:hover:bg-blue-700 text-slate-900 whitespace-nowrap dark:text-white">
                Home
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
