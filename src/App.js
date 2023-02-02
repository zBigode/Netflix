import "./App.css";
import Row from "./components/rows";
import categories from "./api";
import Banner from "./components/banner";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
