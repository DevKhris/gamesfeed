import { themeToggle } from "../helpers/themeToggle";
import GamerFeed from "./../assets/images/GamerFeed.png";
import { useState } from "react";
function NavBar() {
  const [mode, setMode] = useState("dark");

  return (
    <div className="relative top-0 left-0 z-40 w-full pb-1 pl-1">
      <div className="container relative md:mx-auto">
        <div className="row">
          <div className="w-full">
            <nav className="flex items-center justify-between z-20 bg-white dark:bg-slate-900 py-2.5">
              <a className="flex items-center mr-4 navbar-brand" href="/">
                <img
                  className="pt-1"
                  src={GamerFeed}
                  alt="GamerFeed"
                  width={64}
                />
                <span className="ml-1 font-semibold transition-colors text-slate-900 whitespace-nowrap dark:text-white x-8 hover:text-orange-500 dark:hover:text-purple-500">
                  GamerFeed
                </span>
              </a>

              <div className="flex items-center">
                <ul className="items-center content-end">
                  <li>
                    <button
                      className="mr-4 text-lg font-bold transition-colors x-8 dark:text-white dark:hover:text-orange-500 hover:text-purple-500"
                      onClick={() => themeToggle(mode, setMode)}
                    >
                      {mode === "light" ? (
                        <i className="lni lni-night" />
                      ) : (
                        <i className="lni lni-sun" />
                      )}
                    </button>
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
