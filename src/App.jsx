import NavBar from "./components/NavBar";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div className="bg-inherit">
      <header className="header-area">
        <NavBar />
      </header>
      <div className="container">
        <NewsPage />
      </div>
    </div>
  );
}

export default App;

