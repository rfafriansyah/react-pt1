import Footer from "./Footer";
import Header from "./Header";
import List from "./List";

function App() {
  return (
    <div className="App">
      <Header list="3 Terbaik" />
      <List />
      <Footer name="Makanan Nusantara" tahun="1999" />
    </div>
  );
}

export default App;
