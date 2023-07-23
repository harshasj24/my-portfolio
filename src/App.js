import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/home/home";
import Header from "./shared/components/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
      <Home />
      </main>
    </div>
  );
}

export default App;
