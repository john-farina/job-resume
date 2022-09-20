import "./styles/App.scss";
import Head from "./components/Head";
import MainPage from "./components/MainPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Head />
      <div className="container">
        <Header />
        <MainPage />
      </div>
    </>
  );
}

export default App;
