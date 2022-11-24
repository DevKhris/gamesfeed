import NavBar from "./components/NavBar";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen dark:bg-slate-900">
      <header className="header-area">
        <NavBar />
      </header>
      <div className="container">
        <NewsPage />
      </div>
      <footer className="h-auto">
        <div className="p-5">
          <p className="text-center dark:text-white">2022 &copy;</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

